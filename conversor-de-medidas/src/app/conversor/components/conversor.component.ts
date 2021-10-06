import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MedidaService, ConversorService } from '../services';
import { Medida, Conversao } from '../models';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {


  medidas: Medida[];
  conversao: Conversao;
  possuiErro: boolean;

  @ViewChild("conversaoForm", { static: true })
  conversaoForm: NgForm;

  constructor(
    private medidaService: MedidaService,
    private conversorService: ConversorService
  ) { }

  ngOnInit(): void {
    this.medidas = this.medidaService.listarTodas();
    this.init();
  }


  init(): void{
    this.conversao = new Conversao(null, null, null);
    this.possuiErro = false;
  }

  converter(): void{
    if(this.conversaoForm.form.valid){
      this.conversorService.converter(this.conversao)
      error => this.possuiErro = true;       
    }
 }


}
