import { Routes } from '@angular/router';
import { EditarTarefaComponent } from './editar';
import { CadastrarTarefaComponent } from './cadastrar';
import { ListarTarefaComponent} from './listar';

//tarefaRoutes precisa importar
export const TarefaRoutes : Routes = [
    {
        path: 'tarefas', //quando tiver em tarefas vai ser redirecionado para tarefas/listar
        redirectTo: 'tarefas/listar'
    },
    {
        path: 'tarefas/listar',  
        component: ListarTarefaComponent
    },
    {
        path: 'tarefas/cadastrar',
        component: CadastrarTarefaComponent
    },
    {
        path: 'tarefas/editar/:id',
        component: EditarTarefaComponent
    }
];