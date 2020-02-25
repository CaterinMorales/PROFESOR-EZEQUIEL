import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZodiacoPage } from './zodiaco';

@NgModule({
  declarations: [
    ZodiacoPage,
  ],
  imports: [
    IonicPageModule.forChild(ZodiacoPage),
  ],
})
export class ZodiacoPageModule {}
