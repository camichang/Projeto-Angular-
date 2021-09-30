import { Component, OnInit } from '@angular/core';

import { PacienteService, Paciente } from '../shared';

@Component({
  selector: 'app-listar-paciente',
  templateUrl: './listar-paciente.component.html',
  styleUrls: ['./listar-paciente.component.css']
})

export class ListarPacienteComponent implements OnInit {

  pacientes: Paciente[];

  constructor(private pacienteService: PacienteService) { }

  ngOnInit() {
    this.pacientes = this.listarTodos();

  }
  listarTodos(): Paciente[] {
    return this.pacienteService.listarTodos();
  }

  alterarStatus(paciente: Paciente): void {
    if (confirm('Deseja finalizar o atendimento do "' + paciente.nome + '"?')) {
      this.pacienteService.alterarStatus(paciente.id);
      this.pacientes = this.listarTodos();
    } else {
      this.pacientes = this.listarTodos();
    }
  }

  remover($event: any, paciente: Paciente): void {
    $event.preventDefault();
    if (confirm('Deseja realmente remover o paciente "' + paciente.nome + '"?')) {
      this.pacienteService.remover(
        paciente.id
      );
      this.pacientes = this.listarTodos();
    } else {
      this.pacientes = this.listarTodos();
    }

  }

}
