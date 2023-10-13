import { Component , OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Moeda, Conversao, ConversaoResponse } from '../models';
import { MoedaService, ConversorService } from '../services';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit{

  moedas: Moeda[];
  conversao: Conversao;
  possuiErro: boolean;
  conversaoResponse: ConversaoResponse;

  @ViewChild("conversaoForm", { static: true }) conversaoForm: NgForm;

  constructor(
    private moedaService: MoedaService,
    private conversorService: ConversorService) {}

  ngOnInit(){
    this.moedas = this.moedaService.listarTodas();
    this.init();
  }

  init(): void{
    this.conversao = new Conversao('USD', 'BRL', null);
    this.possuiErro = false;
  }

  converter(): void{
    if (this.conversaoForm.form.valid){
      this.conversorService.converter(this.conversao).pipe(
        catchError((err: any) => {
          this.possuiErro = true;
          return of(null); // Retorne um valor padrão ou vazio aqui, se necessário
        })
      )
      .subscribe((response) => {
        if (response) {
          this.conversaoResponse = response;
        }
      });
    }
      /*this.conversaoResponse = JSON.parse(
        `{"base":"${this.conversao.moedaDe}", "date":"2023-10-10", "rates":{"${this.conversao.moedaPara}": 5.4321}}`
      );
    };*/
  }
}
