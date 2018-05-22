import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Translations, LicenseSearchComponent } from '../shared';
import { SearchModel } from '../report-select-license/shared';
import { ReportSelectLicensePage } from '../report-select-license';

/*
  Generated class for the ReportSearch page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-report-search',
  templateUrl: 'report-search.html'
})
export class ReportSearchPage {

  @ViewChild(LicenseSearchComponent)
  licenseSearchComponent: LicenseSearchComponent;

  public t = Translations;

  public searchModel: SearchModel = new SearchModel();

  public licenseName: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    this.searchModel = this.navParams.data as SearchModel;
    let licenseArr = this.searchModel.License.split(',')
    this.licenseName = licenseArr[0];
    if (licenseArr.length > 1)
      this.licenseName += ` ${this.t.language.And} ${licenseArr.length - 1} ${this.t.language.License}`
  }

  changePage() {
    let searchDate = this.licenseSearchComponent.get();
    this.searchModel.StartDate = searchDate.StartDate;
    this.searchModel.EndDate = searchDate.EndDate;
    this.navCtrl.push(ReportSelectLicensePage, this.searchModel);
  }

}
