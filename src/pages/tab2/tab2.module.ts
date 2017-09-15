import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tab2Page } from './tab2';

@NgModule({
  declarations: [
    Tab2Page,
  ],
  imports: [
    IonicPageModule.forChild(Tab2Page),
  ],
  exports: [
    Tab2Page
  ]
})
export class Tab2PageModule { }
