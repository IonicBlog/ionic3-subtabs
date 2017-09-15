import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tab5Page } from './tab5';

@NgModule({
  declarations: [
    Tab5Page,
  ],
  imports: [
    IonicPageModule.forChild(Tab5Page),
  ],
  exports: [
    Tab5Page
  ]
})
export class Tab5PageModule {}
