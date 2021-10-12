import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulosEcomponentesComponent } from './modulos-ecomponentes/modulos-ecomponentes.component';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    ModulosEcomponentesComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule,
    MatDividerModule
  ]
})
export class ModulosEcomponentesModule { }
