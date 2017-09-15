import { Component, ViewChild } from '@angular/core';

import { IonicPage } from "ionic-angular";

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'Tab1Page';
  tab2Root = 'Tab2Page';
  tab3Root = 'Tab3Page';
  tab4Root = 'Tab4Page';
  tab5Root = 'Tab5Page';

  @ViewChild('myTabs') tabRef: any;

  constructor() {
  }
  selectTab() {
    this.tabRef.select(2);
  }
}
