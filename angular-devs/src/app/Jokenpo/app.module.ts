import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { TelasService } from './telas.service';
import { SelecionadoDirective } from './selecionado.directive';

@NgModule({
  imports:      [ BrowserModule, 
  FormsModule,
  BrowserAnimationsModule,
  MatToolbarModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatCheckboxModule ],
  declarations: [ AppComponent, HelloComponent, SelecionadoDirective ],
  bootstrap:    [ AppComponent ],
  providers: [
    TelasService
  ]
})
export class AppModuleJokenpo { }
