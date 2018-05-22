import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';

import * as moment from 'moment/moment';
import { HttpClient } from '../../http-client';
import { Observable } from 'rxjs/Rx';

import { Translations, ToolHelper } from '../shared';
import { ReportSelectService, ReportSelectModel, SearchModel } from './shared';
import { ReportSelectDailyPage } from '../report-select-daily';
import { ChartLicensePage } from '../chart-license';

/*
  Generated class for the ReportSelectLicense page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-report-select-license',
  templateUrl: 'report-select-license.html',
  providers: [ReportSelectService]
})
export class ReportSelectLicensePage {

  public t = Translations;

  private take: number = 30;

  private headerName: string;

  private date: string;

  public searchModel: SearchModel;

  public reportSelectModel: ReportSelectModel[];

  loading: boolean = true;

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public navParams: NavParams,
    private reportSelectService: ReportSelectService,
    private toolHelper: ToolHelper,
    private http: HttpClient) {
  }

  ionViewDidLoad() {

    this.searchModel = this.navParams.data as SearchModel;

    this.getData(0, this.take, true).subscribe((data) => {
      if (data) {
        this.reportSelectModel = data;
      }
    })
  }

  toggleDetails(data) {
    if (data.showDetails) {
      data.showDetails = false;
    } else {
      data.showDetails = true;
    }
  }

  reportSelectDaily(data: ReportSelectModel) {
    this.navCtrl.push(ReportSelectDailyPage, data);
  }

  showChart(data: ReportSelectModel) {
    let profileModal = this.modalCtrl.create(ChartLicensePage, data);
    profileModal.present();
  }

  getData(skip: number, take: number, getTotal?: boolean): Observable<any> {

    this.headerName = `${this.searchModel.License}`;

    this.date = `${moment(this.searchModel.StartDate).format('DD/MM/YYYY')} - 
    ${moment(this.searchModel.EndDate).format('DD/MM/YYYY')}`;

    return this.reportSelectService.getReport(this.searchModel)
      .map((data) => {
        console.log(data);

        this.loading = false;
        if (data.Message) {
          let alert = this.toolHelper.alert(this.t.getByValueEn(data.Message));
          alert.onDidDismiss(() => {
            this.navCtrl.pop();
          });
          alert.present();
          return null;
        }
        else if (data.StatusCode) {
          let alert = this.toolHelper.alert(this.t.getByValueEn(data.StatusCode));
          alert.onDidDismiss(() => {
            this.navCtrl.pop();
          });
          alert.present();
          return null;
        }
        else {
          let model = data as ReportSelectModel[];
          model.forEach(m => {
            m.DailyReport.forEach(d => {
              d.Date = moment(d.Date).format('DD/MM/YYYY')

              d.Stations.forEach(s => {
                s.InDateTime = this.toolHelper.setFormatTime(s.InDateTime)
                s.OutDateTime = this.toolHelper.setFormatTime(s.OutDateTime)
                s.Period = this.toolHelper.setTimestamp(s.Period)
                s.Idle = this.toolHelper.setTimestamp(s.Idle)
                s.Park = this.toolHelper.setTimestamp(s.Park)
              })
              d.IdleTotal = this.toolHelper.setTimestamp(d.IdleTotal)
              d.ParkTotal = this.toolHelper.setTimestamp(d.ParkTotal)
              d.TotalUsag = this.toolHelper.setTimestamp(d.TotalUsag)
              d.RunTimeMax = this.toolHelper.setTimestamp(d.RunTimeMax)
            });
            m.IdleTotal = this.toolHelper.setTimestamp(m.IdleTotal)
            m.ParkTotal = this.toolHelper.setTimestamp(m.ParkTotal)
            m.TotalUsag = this.toolHelper.setTimestamp(m.TotalUsag)
            m.RunTimeMax = this.toolHelper.setTimestamp(m.RunTimeMax)
          });
          return model;
        }

      },
      (err) => {
        console.log(err);
        this.loading = false;
        let alert = err.statusText ?
          this.toolHelper.alertEvent(this.t.getByValueEn(err.statusText)
            , this.navCtrl.pop())
          :
          this.toolHelper.alertEvent(this.t.language.ConnectionRefused
            , this.navCtrl.pop())

        alert.present();

        return null;
      });
  }

  convertNumberToTime(time: number): string {
    if (!time)
      return '0';
    return moment().startOf('day').minutes(time).format('H:mm');
  }
}
