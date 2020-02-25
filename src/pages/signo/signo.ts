import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Signo } from "../../interfaces/signo.interfaces";

import { CARTAS } from "../../data/data.cartas";
import { Carta } from "../../interfaces/carta.interfaces";



@Component({
  selector: 'page-signo',
  templateUrl: 'signo.html',
})

export class SignoPage {

  // objetos proviniente de HomePage
  signo : Signo;

  // valores aleatorios
  min:number = 1;
  max:number = 78;

  // arreglo de cartas existentes
  cartas:Carta[] = [];

  // objeto cartas
  carta:Carta;

  audio = new Audio();


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    // Obtener signo proveniente de HomePage
    this.signo = navParams.get('signo');

    //Llenar arreglo de cartas
    this.cartas = CARTAS.slice(0);

    // Obtener número aleatorio
    let aleatorio:number = this.numeroAleatorio(this.min, this.max);

    // Guardar la carta que se obtuvo aleatoriamente en el objeto carta
    this.carta = this.cartas[aleatorio-1];
  }

  reproducir(){
    this.carta.reproduciendo = true;
    this.audio.src = this.carta.audio;
    this.audio.load();
    this.audio.play();
  }

  pausarAudio(){
    this.carta.reproduciendo = false;
    this.audio.pause();
    this.audio.currentTime = 0;  //esta línea pone en cero el tiempo de reproducciónes
  }

  numeroAleatorio(min:number, max:number){
    return Math.round(Math.random() * (max - min) + min);
  }

  cerrarModal(){
    this.navCtrl.pop();
  }

  volverAtras(){
    this.navCtrl.popToRoot();
  }

}
