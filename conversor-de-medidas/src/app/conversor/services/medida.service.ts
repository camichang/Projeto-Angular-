import { Injectable } from '@angular/core';
import { Medida } from '../models';

@Injectable()
export class MedidaService {

  private medidas: Medida[];

  constructor() { }

  private medidasObj = [ 
    { "sigla": "m", "descricao": "Metros", "valor": 1 },
    { "sigla": "cm", "descricao": "Centímetros", "valor": 100 },
    { "sigla": "mm", "descricao": "Milímetros", "valor": 1000 }, 
    ]; 


  listarTodas(): Medida[]{
    if(this.medidas){
      return this.medidas;
    }
    this.medidas = [];

    for(let medidasObj of this.medidasObj){
      let medida: Medida = new Medida(); 
      Object.assign(medida, medidasObj);
      this.medidas.push(medida);
    }    
	  return this.medidas;
  }

  
}

