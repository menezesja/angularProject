import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TarefaRoutes } from "./tarefas";

//lista de rotas de url/componentes
export const routes: Routes = [
    {
        path: '',
        redirectTo: '/tarefas/listar',
        pathMatch: 'full'
    },
    ...TarefaRoutes
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ], // modulo de rotas unico
    exports: [ RouterModule ],
})
export class AppRoutingModule{}