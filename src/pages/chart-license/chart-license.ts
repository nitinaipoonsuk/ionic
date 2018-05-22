import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

import { ReportSelectModel } from '../report-select-license';
import { Translations } from '../shared';
import Enumerable, { from } from 'linq';

@Component({
  selector: 'page-chart-license',
  templateUrl: 'chart-license.html'
})
export class ChartLicensePage {

  private t = Translations;

  public headerName: string = '';

  @ViewChild('totalStatus') totalStatus;
  @ViewChild('dailyStatus') dailyStatus;
  @ViewChild('distanceStatus') distanceStatus;
  @ViewChild('speedStatus') speedStatus;

  totalStatusChart: any;
  dailyStatusChart: any;
  distanceStatusChart: any;
  speedStatusChart: any;

  bgOrange: string = "rgba(255, 143, 102, 0.2)";
  bgRed: string = 'rgba(255, 99, 132, 0.2)';
  bgBlue: string = 'rgba(54, 162, 235, 0.2)';
  bgYellow: string = 'rgba(255, 240, 102, 0.2)';
  bgGreen: string = 'rgba(102, 255, 110, 0.2)';
  bgPurple: string = 'rgba(153, 102, 255, 0.2)';
  bgIndigo: string = 'rgba(63, 81, 181, 0.2)';

  hbgOrange: string = "#FF7F50"
  hbgRed: string = "#FF6384";
  hbgBlue: string = "#36A2EB";
  hbgYellow: string = "#fff066";
  hbgGreen: string = "#66ff6e";
  hbgPurple: string = "#36A2EB";
  hbgIndigo: string = "#3F51B5";

  //all
  date: string[];

  //Total status chart
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

  //Daily status chart
  dailyRun: string[];
  dailyRunData: number[] = [];
  runBgColor: string[] = [];
  runHbgColor: string[] = [];
  dailyPark: string[];
  dailyParkData: number[] = [];
  parkBgColor: string[] = [];
  parkHbgColor: string[] = [];
  dailyIdle: string[];
  dailyIdleData: number[] = [];
  idleBgColor: string[] = [];
  idleHbgColor: string[] = [];

  //Distance status chart
  totalDis: number[];

  //Speed status chart
  overSpeed: number[];

  public reportSelectModel: ReportSelectModel = new ReportSelectModel();

  constructor(public navCtrl: NavController,
    public navParams: NavParams) { }

  ionViewDidLoad() {

    this.reportSelectModel = this.navParams.data as ReportSelectModel;

    this.headerName = `${this.reportSelectModel.License}`;

    this.date = Enumerable.from(this.reportSelectModel.DailyReport).select(d => d.Date).toArray();

    this.getTotalStatusChart();
    this.getDailyStatusChart();
    this.getDistanceStatusChart();
    this.getSpeedStatusChart();

    this.totalStatusChart = new Chart(this.totalStatus.nativeElement, {

      type: 'doughnut',
      data: {
        labels: [this.t.language.Park, this.t.language.Idle, this.t.language.Running],
        datasets: [{
          label: 'Total status',
          data: this.totalStatusData,
          backgroundColor: [this.bgOrange, this.bgYellow, this.bgGreen],
          hoverBackgroundColor: [this.hbgOrange, this.hbgYellow, this.hbgGreen]
        }]
      }
    });

    this.dailyStatusChart = new Chart(this.dailyStatus.nativeElement, {

      type: 'bar',
      data: {
        labels: this.date,
        datasets: [{
          label: this.t.language.Park,
          data: this.dailyParkData,
          backgroundColor: this.parkBgColor,
          hoverBackgroundColor: this.parkHbgColor
        },
        {
          label: this.t.language.Idle,
          data: this.dailyIdleData,
          backgroundColor: this.idleBgColor,
          hoverBackgroundColor: this.idleHbgColor
        },
        {
          label: this.t.language.Running,
          data: this.dailyRunData,
          backgroundColor: this.runBgColor,
          hoverBackgroundColor: this.runHbgColor
        }]
      }
    });

    this.distanceStatusChart = new Chart(this.distanceStatus.nativeElement, {

      type: 'bar',
      data: {
        labels: this.date,
        datasets: [{
          label: this.t.language.Length,
          data: this.totalDis,
          backgroundColor: this.bgBlue,
          hoverBackgroundColor: this.hbgBlue
        }]
      }
    });

    this.speedStatusChart = new Chart(this.speedStatus.nativeElement, {

      type: 'bar',
      data: {
        labels: this.date,
        datasets: [{
          label: this.t.language.Overspeed,
          data: this.overSpeed,
          backgroundColor: this.bgRed,
          hoverBackgroundColor: this.hbgRed
        }]
      }
    });
  }

  getTotalStatusChart() {
    this.runDate = this.reportSelectModel.RunTotal.split('d ')
    if (this.runDate.length == 2) {
      this.runHour = this.runDate[1].split(':')
      this.runMinutes = (parseInt(this.runDate[0]) * 1440) + (parseInt(this.runHour[0]) * 60) + (parseInt(this.runHour[1]))
    } else {
      this.runHour = this.reportSelectModel.RunTotal.split(':')
      this.runMinutes = (parseInt(this.runHour[0]) * 60) + (parseInt(this.runHour[1]))
    }

    this.parkDate = this.reportSelectModel.ParkTotal.split('d ')
    if (this.parkDate.length == 2) {
      this.parkHour = this.parkDate[1].split(':')
      this.parkMinutes = (parseInt(this.parkDate[0]) * 1440) + (parseInt(this.parkHour[0]) * 60) + (parseInt(this.parkHour[1]))
    } else {
      this.parkHour = this.reportSelectModel.ParkTotal.split(':')
      this.parkMinutes = (parseInt(this.parkHour[0]) * 60) + (parseInt(this.parkHour[1]))
    }

    this.idleDate = this.reportSelectModel.IdleTotal.split('d ')
    if (this.idleDate.length == 2) {
      this.idleHour = this.idleDate[1].split(':')
      this.idleMinutes = (parseInt(this.idleDate[0]) * 1440) + (parseInt(this.idleHour[0]) * 60) + (parseInt(this.idleHour[1]))
    } else {
      this.idleHour = this.reportSelectModel.IdleTotal.split(':')
      this.idleMinutes = (parseInt(this.idleHour[0]) * 60) + (parseInt(this.idleHour[1]))
    }

    this.totalStatusMinutes = Number((this.parkMinutes + this.idleMinutes + this.runMinutes).toFixed(2));
    this.park = ((this.parkMinutes / this.totalStatusMinutes) * 100)
    this.idle = ((this.idleMinutes / this.totalStatusMinutes) * 100)
    this.run = ((this.runMinutes / this.totalStatusMinutes) * 100)

    this.totalStatusData[0] = Number(this.park.toFixed(2));
    this.totalStatusData[1] = Number(this.idle.toFixed(2));
    this.totalStatusData[2] = Number(this.run.toFixed(2));

    console.log(this.totalStatusData);
  }

  getDailyStatusChart() {
    this.dailyRun = Enumerable.from(this.reportSelectModel.DailyReport).select(p => p.RunTotal).toArray();
    this.dailyRun.forEach(d => {
      let dailyDate = d.split('d ')
      if (dailyDate.length == 2) {
        let dailyHour = dailyDate[1].split(':')
        var dailyMinutes = (parseInt(dailyDate[0]) * 1440) + (parseInt(dailyHour[0]) * 60) + (parseInt(dailyHour[1]))
      } else {
        let dailyHour = d.split(':')
        var dailyMinutes = (parseInt(dailyHour[0]) * 60) + (parseInt(dailyHour[1]))
      }
      this.dailyRunData.push(dailyMinutes);
      this.runBgColor.push(this.bgGreen);
      this.runHbgColor.push(this.hbgGreen);
    });

    this.dailyPark = Enumerable.from(this.reportSelectModel.DailyReport).select(p => p.ParkTotal).toArray();
    this.dailyPark.forEach(d => {
      let dailyDate = d.split('d ')
      if (dailyDate.length == 2) {
        let dailyHour = dailyDate[1].split(':')
        var dailyMinutes = (parseInt(dailyDate[0]) * 1440) + (parseInt(dailyHour[0]) * 60) + (parseInt(dailyHour[1]))
      } else {
        let dailyHour = d.split(':')
        var dailyMinutes = (parseInt(dailyHour[0]) * 60) + (parseInt(dailyHour[1]))
      }
      this.dailyParkData.push(dailyMinutes);
      this.parkBgColor.push(this.bgOrange);
      this.parkHbgColor.push(this.hbgOrange);
    });

    this.dailyIdle = Enumerable.from(this.reportSelectModel.DailyReport).select(p => p.IdleTotal).toArray();
    this.dailyIdle.forEach(d => {
      let dailyDate = d.split('d ')
      if (dailyDate.length == 2) {
        let dailyHour = dailyDate[1].split(':')
        var dailyMinutes = (parseInt(dailyDate[0]) * 1440) + (parseInt(dailyHour[0]) * 60) + (parseInt(dailyHour[1]))
      } else {
        let dailyHour = d.split(':')
        var dailyMinutes = (parseInt(dailyHour[0]) * 60) + (parseInt(dailyHour[1]))
      }
      this.dailyIdleData.push(dailyMinutes);
      this.idleBgColor.push(this.bgYellow);
      this.idleHbgColor.push(this.hbgYellow);
    });
  }

  getDistanceStatusChart() {
    this.totalDis = Enumerable.from(this.reportSelectModel.DailyReport).select(d => d.TotalDis).toArray();
  }

  getSpeedStatusChart() {
    this.overSpeed = Enumerable.from(this.reportSelectModel.DailyReport).select(o => o.OverTimes).toArray();
  }
}
