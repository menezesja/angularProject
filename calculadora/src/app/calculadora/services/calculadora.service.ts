/**
 * Serviço responsável por executar as operações da calculadora.
 * 
 * @author Jade Santos<menezesandreina18@gmail.com>
 * @since 1.0.0
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  /* Contantes utilizadas para identificação 
     das operações de cálculo */
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly MULTIPLICACAO: string = '*';
  static readonly DIVISAO: string = '/';

  constructor() { }

  /**
   * Método que calcula uma operação matemática dado dois números.
   * Suporta as operações soma, subtração, multiplicação e divisão.
   * 
   * @param num1 num1 number
   * @param num2 num1 number
   * @param operacao operacao string Operação a ser executada
   * @returns number Resultado da operação
   */

  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number; //armazena o resultado da operação (ts)

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
