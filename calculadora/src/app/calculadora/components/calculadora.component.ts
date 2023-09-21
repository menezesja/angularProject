import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private numero1: string;
  private numero2: string;
  private operacao: string;
  private resultado: number;

  //serviços do componente, criação de metodos
  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit() {
    this.limpar()
  }

  limpar(): void{
    this.numero1 = '0';
    this.numero2 = null;
    this.operacao = null;
    this.resultado = null;
  }  

   //Adiciona o numero selecionado para o cálculo posterirmente.

  adicionarNumero(numero: string): void {
    if(this.operacao == null){
      this.numero1 = this.concatenarNumero(this.numero1, numero);
    } else{
      this.numero2 = this.concatenarNumero(this.numero2, numero);
    } 
  }

  //retorna o valor concatenado. Trata o separador decimal
  concatenarNumero(numAtual: string, numConcat: string): string {
    if (numAtual === '0' || numAtual === null) {  //caso contenha apenas '0' ou null, reinicia p valor
      numAtual = '';
    }

    //primiro difito é '.', concatena '0' antes do ponto
    if (numConcat === '.' && numAtual === ''){
      return '0.';
    }

    //caso '.' digitado já contenha um '.', apenas retorna
    if (numConcat === '.' && numAtual.indexOf('.') > -1){
      return numAtual;
    }
    return numAtual + numConcat;
  }

  /**
   * Executa a lógica quando um operador for selecionado. Caso já possua uma operação selecionada, executa a
   * operação anterior e define a nova operação.
   * 
   * @param string operacao 
   * @returns void
   */

  definirOperacao(operacao:  string): void{
    if (this.operacao === null){ //apenas define a operação caso não exista uma
      this.operacao = operacao;
      return;
    } 
    /*caso a operação definida e número 2 selcionado, efetua o cálculo da operação */
    if (this.numero2 !== null){
      this.resultado = this.calculadoraService.calcular(
        parseFloat(this.numero1),
        parseFloat(this.numero2),
        this.operacao);
      this.operacao = operacao;
      this.numero1 = this.resultado.toString();
      this.numero2 = null;
      this.resultado = null; 
    }
  }

  //Efetua o cálculo de uma operação
  calcular(): void {
    if (this.numero2 == null){
      return;
    }
    this.resultado = this.calculadoraService.calcular(
      parseFloat(this.numero1),
      parseFloat(this.numero2),
      this.operacao);
  }

  get display(): string {
    if(this.resultado !== null){
      return this.resultado.toString();
    }
    if (this.numero2 !== null){
      return this.numero2;
    }
    return this.numero1;
  }
}
