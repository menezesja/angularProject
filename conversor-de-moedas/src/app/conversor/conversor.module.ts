import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 
import { ConversorComponent } from './components';
import { MoedaService, ConversorService } from './services';

@NgModule({
  declarations: [
    ConversorComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    ConversorComponent
  ],
  providers: [
    MoedaService,
    ConversorService
  ]
})
export class ConversorModule { }
