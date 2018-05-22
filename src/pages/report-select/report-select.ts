import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Translations, MultiselectLicenseComponent } from '../shared';
import { SearchModel } from '../report-select-license/shared';
import { ReportSearchPage } from '../report-search';
/*
  Generated class for the ReportSelectGroup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-report-select',
  templateUrl: 'report-select.html'
})
export class ReportSelectPage {

  @ViewChild(MultiselectLicenseComponent)
  multiselectLicenseComponent: MultiselectLicenseComponent;

  public t = Translations;

  public searchModel: SearchModel = new SearchModel();

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
  }

  changePage() {
    this.searchModel.CustomerBoxId = this.multiselectLicenseComponent.id.toString();
    this.searchModel.License = this.multiselectLicenseComponent.name.toString();
    this.navCtrl.push(ReportSearchPage, this.searchModel);
  }
}
