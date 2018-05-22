import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Translations } from '../shared';
import { DailyReportModel, StationModel } from '../report-select-license';
/*
  Generated class for the ReportSelectStation page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-report-select-station',
  templateUrl: 'report-select-station.html'
})
export class ReportSelectStationPage {

  private t = Translations;

  private headerName: string;

  private stationReportModels: StationModel[];

  constructor(public navCtrl: NavController,
  public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportSelectStationPage');
    let dailyReport = this.navParams.data as DailyReportModel;
    this.headerName = dailyReport.Date;

    this.stationReportModels = dailyReport.Stations;
    
  }

  toggleDetails(data) {
    if (data.showDetails) {
      data.showDetails = false;
    } else {
      data.showDetails = true;
    }
  }

}
