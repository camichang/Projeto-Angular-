import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PacienteService, Paciente } from '../shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-paciente',
  templateUrl: './cadastrar-paciente.component.html',
  styleUrls: ['./cadastrar-paciente.component.css']
})
export class CadastrarPacienteComponent implements OnInit {

  @ViewChild('formPaciente', {static:true})formPaciente: NgForm;

  paciente:Paciente;

  constructor(private pacienteSevice: PacienteService, private router: Router) { }

  ngOnInit() {
    this.paciente = new Paciente();
  }

  cadastrar(): void{
    if(this.formPaciente.form.valid){
      this.pacienteSevice.cadastrar(this.paciente)
      this.router.navigate(["/pacientes"]);
    }
  }

}
