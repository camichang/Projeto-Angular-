import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraCientificaComponent } from './components';
import { CalculadoraCientificaService } from './services';




@NgModule({
  declarations: [
    CalculadoraCientificaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CalculadoraCientificaComponent
  ],
  providers:[
    CalculadoraCientificaService
  ]
})
export class CalculadoraCientificaModule { }
