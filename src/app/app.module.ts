import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignoPage } from '../pages/signo/signo';
import { SaludPage } from '../pages/salud/salud';
import { VideosPage } from '../pages/videos/videos';
import { RedesPage } from '../pages/redes/redes';
import { ZodiacoPage } from '../pages/zodiaco/zodiaco';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignoPage,
    SaludPage,
    VideosPage,
    RedesPage,
    ZodiacoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignoPage,
    SaludPage,
    RedesPage,
    VideosPage,
    ZodiacoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
