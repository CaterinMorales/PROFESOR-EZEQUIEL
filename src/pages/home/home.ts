import { Component } from '@angular/core';
import { NavController, NavParams, ModalController   } from 'ionic-angular';

import { SIGNOS } from "../../data/data.signos";
import { Signo } from "../../interfaces/signo.interfaces";


import { SignoPage } from "../signo/signo";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  signos:Signo[] = [];
  signo:Signo;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController ) {
    this.signos = SIGNOS.slice(0);
  }

  ver(signoParam:Signo){
    this.navCtrl.push(SignoPage,{signo:signoParam});
  }










}
