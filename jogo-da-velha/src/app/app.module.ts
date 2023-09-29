import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JogoDaVelhaModule } from './jogo-da-velha';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JogoDaVelhaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
