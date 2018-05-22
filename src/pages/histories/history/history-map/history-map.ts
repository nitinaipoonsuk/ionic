import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Observable } from 'rxjs/Rx';

import * as moment from 'moment/moment';

import { MapComponent, Translations, ToolHelper, MarkerModel, SearchModel, LatLngBounds } from '../../../shared';

import { HistoryService } from '../../shared';

@Component({
  selector: 'page-history-map',
  templateUrl: 'history-map.html',
  providers: [HistoryService]
})
export class HistoryMapPage implements OnInit {

  @ViewChild(MapComponent)
  mapComponent: MapComponent;

  private markerPosition: MarkerModel;

  private searchModel: SearchModel

  public t = Translations;

  private headerName: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toolHelper: ToolHelper,
    private historyService: HistoryService) { }

  ngOnInit() {
    console.log(this.navParams.data);

    this.mapComponent.mapId = 'historyMap';

    this.markerPosition = this.navParams.data.position as MarkerModel;

    this.searchModel = this.navParams.data.searchModel as SearchModel;

    this.headerName = `${this.markerPosition.Info.License}: 
    ${this.markerPosition.Info.StatusDate}`;
  }

  ionViewDidLoad() {

    this.toolHelper.presentLoading()
    this.mapComponent.addMarker(this.markerPosition);
    this.getData();
  }

  ionViewWillEnter() {

  }

  ionViewWillLeave() {

  }

  ionViewCanLeave() {
    this.mapComponent.mapService.toast.dismiss();
  }

  getData() {
    return this.historyService.getMarkers(this.searchModel).subscribe((data) => {
      this.toolHelper.loader.dismiss();
      if (data.Message) {
        let alert = this.toolHelper.alert(this.t.getByValueEn(data.Message));

        alert.onDidDismiss(() => {
          this.navCtrl.pop();
        });

        alert.present();
      }
      else if (data.StatusCode) {
        let alert = this.toolHelper.alert(this.t.getByValueEn(data.StatusCode));

        alert.onDidDismiss(() => {
          this.navCtrl.pop();
        });

        alert.present();
      }
      else {
        
        this.mapComponent.addPolyline(data);
      }
    })

  }
}
