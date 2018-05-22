import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';

import * as moment from 'moment/moment';
import { Translations } from '../shared';
import { ReportSelectModel, DailyReportModel, SearchModel } from '../report-select-license';
import { ReportSelectStationPage } from '../report-select-station';
import { ChartDailyPage } from '../chart-daily';

/*
  Generated class for the ReportSelectDaily page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-report-select-daily',
  templateUrl: 'report-select-daily.html'
})
export class ReportSelectDailyPage {

  private t = Translations;

  private headerName: string;

  public dailyReports: DailyReportModel[];

  constructor(public navCtrl: NavController,
  public navParams: NavParams,
  public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    
    let reportSelectModel = this.navParams.data as ReportSelectModel;
    this.headerName = reportSelectModel.License;

    this.dailyReports = reportSelectModel.DailyReport;
    
  }

  toggleDetails(data) {
    if (data.showDetails) {
      data.showDetails = false;
    } else {
      data.showDetails = true;
    }
  }

  showChart(data){
    let profileModal = this.modalCtrl.create(ChartDailyPage, data);
    profileModal.present();
  }

  reportSelectStation(data: DailyReportModel) {
    this.navCtrl.push(ReportSelectStationPage, data);
  }

}
