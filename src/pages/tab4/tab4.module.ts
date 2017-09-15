import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tab4Page } from './tab4';

@NgModule({
  declarations: [
    Tab4Page,
  ],
  imports: [
    IonicPageModule.forChild(Tab4Page),
  ],
  exports: [
    Tab4Page
  ]
})
export class Tab4PageModule {}
