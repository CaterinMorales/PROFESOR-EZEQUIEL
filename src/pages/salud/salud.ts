import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SignoPage } from "../signo/signo";
import { ZodiacoPage } from "../zodiaco/zodiaco";
import { RedesPage } from "../redes/redes";
import { HomePage } from "../home/home";
import { VideosPage } from "../videos/videos";

@Component({
  selector: 'page-salud',
  templateUrl: 'salud.html',
})
export class SaludPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  eligeTuSigno(){
    this.navCtrl.push(ZodiacoPage);
  }

  cartaDelDia(){
    this.navCtrl.push(HomePage);
  }

  ultimosVideos(){
    this.navCtrl.push(VideosPage);
  }

  redesSociales(){
    this.navCtrl.push(RedesPage);
  }

  volver(){
    this.navCtrl.popToRoot();
  }



}
