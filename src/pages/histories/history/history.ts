import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, InfiniteScroll, App, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Observable } from 'rxjs/Rx';
import * as moment from 'moment/moment';

import { Translations, ToolHelper, SearchModel, MarkerModel } from '../../shared';
import { HistoryList } from './history-list';
import { HistoryMapPage } from './history-map';
import { HistoryModel, HistoryService, HistoryEventsModel } from '../shared';

@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
  providers: [HistoryService]
})
export class HistoryPage {

  @ViewChild(HistoryList)
  historyList: HistoryList;

  public t = Translations;

  private lang: string;

  private enabled: boolean = true;

  private skip: number = 0;

  private take: number = 50;

  private headerName: string;

  private Date: string;

  private showSummary: boolean = false;

  public historyModel: HistoryModel

  private markerModels: MarkerModel[];

  private searchModel: SearchModel;

  private loading: boolean = true;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public navParams: NavParams,
    private app: App,
    private toolHelper: ToolHelper,
    private historyService: HistoryService,
    private storage: Storage
  ) { }

  ionViewWillEnter() {
    setTimeout(() => {
      this.storage.get('settingtempHistory').then((val) => {
        this.historyList.settingTemp = val
      })
    }, 1000);

    if (this.lang != this.t.language.Lang) {
      this.lang = this.t.language.Lang
      this.getData(0, this.take).subscribe((data) => {
        if (data) {
          this.historyList.createDataList(data);
        }
      })
    }
  }

  ionViewDidLoad() {
    this.lang = this.t.language.Lang;
    this.searchModel = this.navParams.data as SearchModel
    this.getData(0, this.take, true).subscribe((data) => {
      if (data) {
        this.historyModel = data;
        this.historyList.createDataList(data);
        this.reloadData();
      }
    })
  }

  reloadData() {
    console.log(this.historyModel.HistoryEvents.length)
    if (this.historyModel.HistoryEvents.length > 30 || this.historyModel.DataAllLength == this.historyModel.HistoryEvents.length)
      return;

    this.skip += 50;
    this.getData(this.skip, this.take)
      .subscribe((data) => {
        if (data)
          this.historyList.pushDataList(data);
        else
          this.enabled = false;
        this.reloadData();
      });
  }

  getData(skip: number, take: number, getTotal?: boolean): Observable<any> {

    this.headerName = `${this.searchModel.License}`;

    this.Date = `${moment(this.searchModel.StartDate).format('DD/MM/YYYY')} - 
    ${moment(this.searchModel.EndDate).format('DD/MM/YYYY')}`;

    return this.historyService.gets(this.searchModel.Id, this.searchModel.StartDate, this.searchModel.EndDate, skip, take, getTotal)
      .map((data) => {
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
          return this.historyService.mappingDateToHistoryModel(data);
        }

      },
      (err) => {
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

  doInfinite(infiniteScroll: InfiniteScroll) {
    console.log('doInfinite');

    if (!this.enabled || !this.historyModel || this.historyModel.HistoryEvents.length >= this.historyModel.DataAllLength) {
      infiniteScroll.complete();
      return;
    }

    this.skip += 50;
    this.getData(this.skip, this.take)
      .subscribe((data) => {
        if (data)
          this.historyList.pushDataList(data);
        else
          this.enabled = false;
        infiniteScroll.complete();
      });
  }

  openMap(historyEventsModel: HistoryEventsModel) {
    console.log('rowClick');

    let markerModel = this.historyService.historyEventsMappingMarkerModel(historyEventsModel, this.historyModel.License, historyEventsModel.Length)

    let profileModal = this.modalCtrl.create(HistoryMapPage,
      {
        position: markerModel,
        searchModel: this.searchModel
      });

    profileModal.present();

    /*this.navCtrl.push(HistoryMapPage,
      {
        position: markerModel,
        searchModel: this.searchModel
      });*/
  }
}
