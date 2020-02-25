import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the RedesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-redes',
  templateUrl: 'redes.html',
})
export class RedesPage {

  constructor(private iab: InAppBrowser) {
  }

  abrirFacebook(){
    const browser = this.iab.create('https://www.facebook.com/Profesor-Ezequiel-334578953701801/?ref=settings', '_blank', 'location=no');
    browser.on('loadstop').subscribe(event => {
       // browser.insertCSS({ code: "body{color: red;" });
    });
  }


  abrirInstagram(){
    const browser = this.iab.create('https://www.instagram.com/profesor_ezequiel/?hl=es-la', '_blank', 'location=no');
    browser.on('loadstop').subscribe(event => {
       // browser.insertCSS({ code: "body{color: red;" });
    });
  }

  abrirWebPage(){
    const browser = this.iab.create('https://profesorezequiel.com/', '_blank', 'location=no');
    browser.on('loadstop').subscribe(event => {
       // browser.insertCSS({ code: "body{color: red;" });
    });
  }

  abrirYoutube(){
    const browser = this.iab.create('https://www.youtube.com/channel/UC7PCoA91XZY8VUSjsqu_Zfw', '_blank', 'location=no');
    browser.on('loadstop').subscribe(event => {
       // browser.insertCSS({ code: "body{color: red;" });
    });
  }

}
