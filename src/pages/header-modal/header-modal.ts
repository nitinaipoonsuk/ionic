import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

import { Translations } from '../shared';

@Component({
  selector: 'page-header-modal',
  templateUrl: 'header-modal.html'
})
export class HeaderModalPage {

  @Input()
  public headerName: string = ''

  private t = Translations;

  constructor(
    public statusBar: StatusBar,
    public navCtrl: NavController) { }

  ionViewDidLoad() {
    this.statusBar.overlaysWebView(true)
    this.statusBar.backgroundColorByHexString('#FF7F50')
  }

  close() {
    this.navCtrl.pop();
  }

}
