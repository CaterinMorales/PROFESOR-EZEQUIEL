import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@Component({
  selector: 'page-videos',
  templateUrl: 'videos.html',
})
export class VideosPage {

  constructor(private iab: InAppBrowser) {
    const browser = this.iab.create('https://www.youtube.com/channel/UC7PCoA91XZY8VUSjsqu_Zfw/videos', '_self', 'location=no');
  }



}
