import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { DashboardRoutes } from './dashboard';
 
export const routes: Routes = [
	{ 
		path: '', 
		redirectTo: '/dashboard', 
		pathMatch: 'full' 
	},
	...DashboardRoutes
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}