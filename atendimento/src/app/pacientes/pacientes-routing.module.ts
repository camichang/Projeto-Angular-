import { Routes } from "@angular/router";
import { EditarPacienteComponent } from "./editar";
import { CadastrarPacienteComponent } from "./cadastrar";
import { ListarPacienteComponent } from "./listar";

export const PacienteRoutes: Routes = [
    {
        path: 'pacientes',
        redirectTo: 'pacientes/listar'
    },
    {
        path:'pacientes/listar',
        component: ListarPacienteComponent
    },
    {
        path: 'pacientes/cadastrar',
        component: CadastrarPacienteComponent
    },
    {
        path: 'pacientes/editar/:id',
        component: EditarPacienteComponent
    }
];