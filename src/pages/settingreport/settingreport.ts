import { Component, Input, Output, ViewChild } from '@angular/core';

import { App, Alert, NavController, NavParams, InfiniteScroll } from 'ionic-angular';

import { Observable } from 'rxjs/Rx';

import { SettingReportService, SettingreportModel } from './shared';

import { ToolHelper, Translations } from '../shared';

@Component({
  selector: 'page-settingreport',
  templateUrl: 'settingreport.html',
  providers: [SettingReportService]

})

export class SettingreportPage {

  public model: SettingreportModel = new SettingreportModel();

  private t = Translations;

  public licenseIds: string;

  public error: boolean;

  public loading: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App,
    private toolHelper: ToolHelper, private settingreportService: SettingReportService) {

    this.licenseIds = navParams.get('Ids');

  }

  ionViewDidLoad() {

  }

  saveSetting() {
    this.loading = true;

    this.model.LicenseIds = this.licenseIds;
    console.log(this.model);


    this.settingreportService.saveSetting(this.model).subscribe((data) => {
      this.loading = false;

      if (data)
        this.navCtrl.pop();
      else
        this.error = true;
    });
  }

}
