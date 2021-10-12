import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';

import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})
export class EditarTarefaComponent implements OnInit {
  
  
  @ViewChild('formTarefa') formTarefa: NgForm;
  
  tarefa: Tarefa; 


  constructor(
    private tarefaService: TarefaService, 
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.tarefa = this.tarefaService.buscarPorId(id);
  }
//o + converte o id de string para numero
//snapshot faz com que capture o parametro da rota
//o id dentro de busca por id é o id que ele vai buscar, la do tarefas.service

  atualizar(): void{
    if(this.formTarefa.form.valid){
      this.tarefaService.atualizar(this.tarefa);
      this.router.navigate(['/tarefas'])
    }
  }
}
