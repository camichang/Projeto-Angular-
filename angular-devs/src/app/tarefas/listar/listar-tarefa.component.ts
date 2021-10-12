import { Component, OnInit } from '@angular/core';

import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[]

  constructor(private tarefaService: TarefaService) { }

  ngOnInit() {
    this.tarefas = this.listarTodos();
    // this.tarefas = [
    //   new Tarefa(1, "Tarefa 01", false),
    //   new Tarefa(2, "Tarefa 02", true)
    // ]
  }
  //new Tarefa é pra ver a impressao

  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }

  alterarStatus(tarefa: Tarefa): void {
    if (confirm('Deseja alterar o status da tarefa "' + tarefa.nome + '"?')) {
      this.tarefaService.alterarStatus(tarefa.id);
      this.tarefas = this.listarTodos();
    } else {
      this.tarefas = this.listarTodos();
    }
  }
  //$event - remove a ação do navegador, quando clicar em remover não vai fazer nada
  remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault();
    if (confirm('Deseja remover a tarefa "' + tarefa.nome + '"?')) {
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.listarTodos();
  }
}

}
