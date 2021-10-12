import { Injectable } from '@angular/core';

import { Tarefa } from './tarefa.model';

@Injectable()
export class TarefaService {

  constructor() { }
  // tarefas do return é a const tarefas
  //precisa transformar string para objeto
  //JSON.parse faz a conversao
  //const tarefas do cadastrar nao precisa definir o tipo
  //Tarefa vem do tarefa.model.ts
  listarTodos(): Tarefa[] {
    const tarefas = localStorage['tarefas']; //localStorage[tarefas] é o nome que foi dado ao banco de dados, onde vai ser guardado as informacoes
    return tarefas ? JSON.parse(tarefas) : []; //se tarefas for true vai transformar em JSON.parse que vai virar objeto, se for false vai retornar vazio
  }
  //dentro do servico tem todas as funcionalidades, chama o metodo cadastrar e chama o componente

  cadastrar(tarefa: Tarefa): void {
    const tarefas = this.listarTodos(); //recebe todas as tarefas cadastradas
    tarefa.id = new Date().getTime(); //vai servir para identificar a tarefa pela data atual
    tarefas.push(tarefa); //inserindo no final do array a tarefa criada
    localStorage['tarefas'] = JSON.stringify(tarefas) //transformando de objeto para string
  }

  //busca por id, tem que saber qual é o id, tem que buscar em todos os find
  buscarPorId(id: number): Tarefa {
    const tarefas: Tarefa[] = this.listarTodos();
    return tarefas.find(tarefa => tarefa.id === id)
  }


  //quando ele atualiza ele deleta o anterior
  atualizar(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listarTodos(); //criar uma const com todas as tarefas
    tarefas.forEach((obj, index, objs) => {  //procura a tarefa por id
      if (tarefa.id === obj.id) {  //verifica se algum id é igual ao de algum dentro do array objs[index]
        objs[index] = tarefa;  //atribuir a nova tarefa ao id encontrado
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas); //sobrescreve a nova tarefa em cima da antiga
  }

  remover(id: number): void {
    let tarefas: Tarefa[] = this.listarTodos();
    tarefas = tarefas.filter(tarefas => tarefas.id !== id); //faz um filter dentro das tarefas e verifica o que é diferente do proposto
    localStorage['tarefas'] = JSON.stringify(tarefas); //tambem sobrescreve sobre as tarefas porem ele remove
  }

  //se é true ou false
  alterarStatus(id: number):void {
    const tarefas : Tarefa[] = this.listarTodos();
    tarefas.forEach((obj,index,objs)=>{
      if (id === obj.id){
        objs[index].concluida = !obj.concluida;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }
}
