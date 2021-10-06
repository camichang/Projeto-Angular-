import { Injectable, OnInit } from '@angular/core';
import { Conversao, Medida } from '../models';
import { MedidaService } from '../services';

@Injectable()

export class ConversorService {

  tamanhoDe: number;
  tamanhoPara: number;
  resultado: number;

  constructor() { }

  converter(conversao: Conversao): number {
    let from = conversao.medidaDe;
    let to = conversao.medidaPara;

    switch (from) {
      case 'm':
        this.tamanhoDe = 1;
        break
      case 'cm':
        this.tamanhoDe = 100;
        break
      case 'mm':
        this.tamanhoDe = 1000;
        break     
    }

    if(this.tamanhoDe == 1){
      switch (to) {
        case 'm':
          this.tamanhoPara = 1;
          break
        case 'cm':        
          this.tamanhoPara = 100;
          break
        case 'mm':
          this.tamanhoPara = 1000;
          break      
      }  
    }

    if(this.tamanhoDe == 100){
      switch (to) {
        case 'm':
          this.tamanhoPara = 0.01;
          break
        case 'cm':        
          this.tamanhoPara = 1;
          break
        case 'mm':
          this.tamanhoPara = 10;
          break      
      }  
    }

    if(this.tamanhoDe == 1000){
      switch (to) {
        case 'm':
          this.tamanhoPara = 0.001;
          break
        case 'cm':        
          this.tamanhoPara = 0.1;
          break
        case 'mm':
          this.tamanhoPara = 1;
          break      
      }  
    }
    
    this.resultado = this.tamanhoPara;
    console.log(this.resultado);
    return this.resultado;
  }
}





