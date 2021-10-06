import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversorComponent } from './components';
import { MedidaService, ConversorService } from './services';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalConversaoComponent } from './utils';



@NgModule({
  declarations: [
    ConversorComponent,
    ModalConversaoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[
    ConversorComponent
  ],
  providers:[
    MedidaService,
    ConversorService
  ]
})
export class ConversorModule { }
