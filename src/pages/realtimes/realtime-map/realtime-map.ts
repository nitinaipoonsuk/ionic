import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Observable } from 'rxjs/Rx';

import { RealtimeService, RouteModel } from '../shared';

import { MapComponent, Translations, MarkerModel, ToolHelper, ListModel } from '../../shared';

@Component({
  selector: 'page-realtime-map',
  templateUrl: 'realtime-map.html',
  providers: [RealtimeService]
})
export class RealtimeMapPage implements OnInit {

  @ViewChild(MapComponent)
  mapComponent: MapComponent;

  public markerModel: MarkerModel;
  private marker: any;

  public routeModel: RouteModel;

  private subScription;
  private ticks;

  private t = Translations;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public realtimeService: RealtimeService,
    private toolHelper: ToolHelper) { }

  ngOnInit() {
    this.mapComponent.mapId = 'realtimeMap';

    this.routeModel = this.navParams.data as RouteModel;

    let realtimeLicense: ListModel = new ListModel();
    realtimeLicense.Id = this.routeModel.CustomerBoxId;
    realtimeLicense.Name = this.routeModel.License;
    localStorage.setItem('licenseModel', JSON.stringify(realtimeLicense));

    this.markerModel = this.realtimeService.mappingToMarkerModel(this.routeModel);
  }

  ionViewDidLoad() {
    this.marker = this.mapComponent.addMarker(this.markerModel,true);
  }

  ionViewWillEnter() {
    this.updateData();
  }

  ionViewWillLeave() {
    console.log('unsubscribe');
    this.subScription && this.subScription.unsubscribe();
    this.mapComponent.mapService.toast.dismiss();
    //this.markerModel = null
  }

  ionViewCanLeave() {
    console.log('remove licenseModel');
    localStorage.removeItem('licenseModel');
  }

  updateData() {
    this.subScription && this.subScription.unsubscribe();
    let timer = Observable.timer(2000, 1000);
    this.subScription = timer.subscribe(t => {
      this.ticks = 20 - t;
      if (this.ticks < 1) {
        this.realtimeService.getAlone(this.routeModel.CustomerBoxId).subscribe((data: RouteModel) => {
          data.Up = this.toolHelper.getTimeUp(data.LastDate)
          data.StatusDate = this.toolHelper.setFormatDatetime(data.StatusDate)
          this.markerModel = this.realtimeService.mappingToMarkerModel(data)
          this.mapComponent.updateMarker(this.marker, this.markerModel)
          console.log('updateData')
          this.subScription.unsubscribe()
          this.updateData()

        });
      }
    });
  }
}

