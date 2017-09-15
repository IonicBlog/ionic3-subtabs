import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tab3Page } from './tab3';

@NgModule({
  declarations: [
    Tab3Page,
  ],
  imports: [
    IonicPageModule.forChild(Tab3Page),
  ],
  exports: [
    Tab3Page
  ]
})
export class Tab3PageModule { }
