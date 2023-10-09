import { Component, OnInit } from '@angular/core';
import { JogoDaVelhaService } from './shared';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent implements OnInit{

  constructor(private jogoDaVelhaService: JogoDaVelhaService){}
  
  ngOnInit(){
    this.jogoDaVelhaService.inicializar();
  }

  //retorna se a tela de inicio deve ser exibida
  get showInicio(): boolean{
    return this.jogoDaVelhaService.showInicio;
  }

  //retorna se o tabuleiro deve ser exibido
  get showTabuleiro(): boolean{
    return this.jogoDaVelhaService.showTabuleiro;
  }

  //retorna se a tela de fim de jogo deve ser exibida
  get showFinal(): boolean{
    return this.jogoDaVelhaService.showFinal;
  }

  //inicializa um novo jogo
  iniciarJogo(): void{
    this.jogoDaVelhaService.iniciarJogo();
  }

  //realizar um jogada no tabuleiro
  jogar(posX: number, posY: number): void{
    this.jogoDaVelhaService.jogar(posX, posY);
  }

  //retorna se a peça X ou O devem ser exibidida para coordenada informada
  exibirX(posX: number, posY: number): boolean{
    return this.jogoDaVelhaService.exibirX(posX, posY);
  }

  exibirO(posX: number, posY: number): boolean{
    return this.jogoDaVelhaService.exibirO(posX, posY);
  }

  //retorna se a marcação de vitória deve ser exebida para a coordenada informada
  exibirVitoria(posX: number, posY: number): boolean{
    return this.jogoDaVelhaService.exibirVitoria(posX, posY);
  }

  //retorna o numero do jogador
  get jogador(): number {
    return this.jogoDaVelhaService.jogador;
  }

  //inicia um novo jogo
  novoJogo(): void {
    this.jogoDaVelhaService.novoJogo();
  }
}
