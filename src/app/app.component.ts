import { Component  } from '@angular/core';
import { Platform, ModalController, App, MenuController  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NavController } from 'ionic-angular';



import { HomePage } from '../pages/home/home';
import { VideosPage } from '../pages/videos/videos';
import { RedesPage } from '../pages/redes/redes';
import { ZodiacoPage } from '../pages/zodiaco/zodiaco';
import { SaludPage } from '../pages/salud/salud';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = SaludPage;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              public modalCtrl: ModalController,
              public app:App,
              public menuCtrl: MenuController ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  seeHome(){
    this.menuCtrl.close();
    this.app.getActiveNav().setRoot(HomePage);
  }

  seeVideos(){
    this.menuCtrl.close();
    this.app.getActiveNav().setRoot(VideosPage);
  }

  seeRedesSociales(){
    this.menuCtrl.close();
    this.app.getActiveNav().setRoot(RedesPage);
  }

  seeZodiaco(){
    this.menuCtrl.close();
    this.app.getActiveNav().setRoot(ZodiacoPage);
  }





}
