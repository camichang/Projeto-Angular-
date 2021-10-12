import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRoutes } from './home/home-routing.module';
import { modulosEcomponentesRoutes } from './modulos-ecomponentes/modulos-Ecomponentes-routing.module';
import { JokenpoRoutes} from './Jokenpo/jokenpo-routing.module'
import { CalculadoraCientificaRoutes } from './calculadora-cientifica/calculadora-cientifica-routing.module';
import { TarefaRoutes } from './tarefas';


const routes: Routes = [
  { 
    path: '',
    redirectTo: 'home-component',
    pathMatch: 'full'
  },
  ...HomeRoutes,
  ...modulosEcomponentesRoutes,
  ...JokenpoRoutes,
  ...CalculadoraCientificaRoutes,
  ...TarefaRoutes


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



