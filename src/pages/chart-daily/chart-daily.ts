import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

import { ReportSelectModel, DailyReportModel, SearchModel } from '../report-select-license';
import { Translations } from '../shared';

@Component({
  selector: 'page-chart-daily',
  templateUrl: 'chart-daily.html'
})
export class ChartDailyPage {

  private t = Translations;

  public headerName: string;
  
  @ViewChild('dailyStatus') dailyStatus;

  dailyStatusChart: any;

  totalStatusData: number[] = [3];
  totalStatusMinutes: number;
  run: number;
  runMinutes: number;
  runDate: string[];
  runHour: string[];
  park: number;
  parkMinutes: number;
  parkDate: string[];
  parkHour: string[];
  idle: number;
  idleMinutes: number;
  idleDate: string[];
  idleHour: string[];

  rdate: string;
  pdate: string;
  sdate: string;

  public dailyReportModel: DailyReportModel = new DailyReportModel();

  constructor(public navCtrl: NavController,
  public navParams: NavParams) {}

  ionViewDidLoad() {

    this.dailyReportModel = this.navParams.data as DailyReportModel;

    this.headerName = `${this.dailyReportModel.Date}`;

    this.getTotalStatusChart();

    this.dailyStatusChart = new Chart(this.dailyStatus.nativeElement, {

      type: 'doughnut',
      data: {
        labels: [this.t.language.Park, this.t.language.Idle, this.t.language.Running],
        datasets: [{
          label: 'Total status',
          data: this.totalStatusData,
          backgroundColor: ["rgba(255, 143, 102, 0.2)",'rgba(255, 240, 102, 0.2)','rgba(102, 255, 110, 0.2)'],
          hoverBackgroundColor: ["#FF7F50","#fff066","#66ff6e"]
        }]
      }
    });
  }

  getTotalStatusChart(){
    this.runDate = this.dailyReportModel.RunTotal.split('d ')
    if(this.runDate.length == 2){
      this.runHour = this.runDate[1].split(':')
      this.runMinutes = (parseInt(this.runDate[0])*1440) + (parseInt(this.runHour[0])*60) + (parseInt(this.runHour[1]))
    }else{
      this.runHour = this.dailyReportModel.RunTotal.split(':')
      this.runMinutes = (parseInt(this.runHour[0])*60) + (parseInt(this.runHour[1]))
    }

    this.parkDate = this.dailyReportModel.ParkTotal.split('d ')
    if(this.parkDate.length == 2){
      this.parkHour = this.parkDate[1].split(':')
      this.parkMinutes = (parseInt(this.parkDate[0])*1440) + (parseInt(this.parkHour[0])*60) + (parseInt(this.parkHour[1]))
    }else{
      this.parkHour = this.dailyReportModel.ParkTotal.split(':')
      this.parkMinutes = (parseInt(this.parkHour[0])*60) + (parseInt(this.parkHour[1]))
    }

    this.idleDate = this.dailyReportModel.IdleTotal.split('d ')
    if(this.idleDate.length == 2){
      this.idleHour = this.idleDate[1].split(':')
      this.idleMinutes = (parseInt(this.idleDate[0])*1440) + (parseInt(this.idleHour[0])*60) + (parseInt(this.idleHour[1]))
    }else{
      this.idleHour = this.dailyReportModel.IdleTotal.split(':')
      this.idleMinutes = (parseInt(this.idleHour[0])*60) + (parseInt(this.idleHour[1]))
    }

    this.totalStatusMinutes = Number((this.parkMinutes + this.idleMinutes + this.runMinutes).toFixed(2));
    this.park = ((this.parkMinutes/this.totalStatusMinutes)*100)
    this.idle = ((this.idleMinutes/this.totalStatusMinutes)*100)
    this.run = ((this.runMinutes/this.totalStatusMinutes)*100)

    this.totalStatusData[0] = Number(this.park.toFixed(2));
    this.totalStatusData[1] = Number(this.idle.toFixed(2));
    this.totalStatusData[2] = Number(this.run.toFixed(2));
  }
}
