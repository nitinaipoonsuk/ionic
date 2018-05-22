import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Translations, MultiselectLicenseComponent } from '../shared';

import { SettingreportDetailPage } from '../settingreport-detail/settingreport-detail'

@Component({
  selector: 'page-settingreport-select',
  templateUrl: 'settingreport-select.html'
})
export class SettingreportSelectPage {

  @ViewChild(MultiselectLicenseComponent)
  multiselectLicenseComponent: MultiselectLicenseComponent;

  public t = Translations;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
  }

  changePage() {
    let licenseId = this.multiselectLicenseComponent.id;
    this.navCtrl.push(SettingreportDetailPage, {
      licenseIds: licenseId.toString()
    });
  }

}
