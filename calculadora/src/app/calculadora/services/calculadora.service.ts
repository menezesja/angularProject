import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  //Contantes utilizadas para identificação das operações de cálculo
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly MULTIPLICACAO: string = '*';
  static readonly DIVISAO: string = '/';

  constructor() { }
  //metodo para calcular uma operacao de dois números
  //let cria uma várivael local
  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number; //armazena o resultado da operação (typescript)

    switch(operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
      break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
      break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
      break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
      break;
      default:
        resultado = 0; 
    }
    return resultado;
  }

}
