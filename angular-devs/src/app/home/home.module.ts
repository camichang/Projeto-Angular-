import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponentComponent } from './home-component/home-component.component';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
  declarations: [
    HomeComponentComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule
  ]
})
export class HomeModule { }
