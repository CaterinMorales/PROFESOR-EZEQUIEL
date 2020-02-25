import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { SIGNOS } from "../../data/data.signos";
import { Signo } from "../../interfaces/signo.interfaces";




@Component({
  selector: 'page-zodiaco',
  templateUrl: 'zodiaco.html'
})
export class ZodiacoPage {

  signos:Signo[] = [];
  signo:Signo;

  constructor(private iab: InAppBrowser) {
    this.signos = SIGNOS.slice(0);
  }

  ver(signoParam:Signo){
    const browser = this.iab.create(signoParam.videos, '_self', 'location=no');
  }



}
