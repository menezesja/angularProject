import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//lista de rotas de url/componentes
export const routes: Routes = [

];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ], // modulo de rotas unico
    exports: [ RouterModule ]
})
export class AppRoutingModule{}