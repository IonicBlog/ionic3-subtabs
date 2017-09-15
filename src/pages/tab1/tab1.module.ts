import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tab1Page } from './tab1';

@NgModule({
  declarations: [
    Tab1Page,
  ],
  imports: [
    IonicPageModule.forChild(Tab1Page),
  ],
  exports: [
    Tab1Page
  ]
})
export class Tab1PageModule { }
