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
}
