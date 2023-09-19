import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  //serviços do componente, criação de metodos
  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit() {
    
  }

}
