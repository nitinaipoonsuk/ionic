import {
  Component,
  OnInit,
  AfterViewInit,
} from '@angular/core';

import { ToastController } from 'ionic-angular';

import { ToolHelper } from '../service';
import { MarkerModel, MapService, LatLngStatusModel } from './shared';

declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  providers: [MapService]
})

export class MapComponent implements OnInit, AfterViewInit {

  public mapId: string;

  constructor(
    public mapService: MapService,
    public toastCtrl: ToastController,
    public toolHelper: ToolHelper
  ) {

  }

  ngOnInit() {
    console.log(this.mapId);
  }

  ngAfterViewInit() {
    this.mapService.loadMap(google, this.mapId, this.toastCtrl, this.toolHelper);
  }

  addMarker(markerModel: MarkerModel, showUp?: boolean): any {
    let marker = this.mapService.setMarker(markerModel, showUp);
    this.mapService.showToast(markerModel.Info, showUp);
    //this.searchMarker(markerModel.Info);
    return marker;
  }

  updateMarker(marker: any, markerModel: MarkerModel): void {
    this.mapService.updateMarker(marker, markerModel);
    this.mapService.showToast(markerModel.Info, true);
    //this.searchMarker(markerModel.Info);
  }

  addPolyline(latLngStatusModels: LatLngStatusModel[]) {
    this.mapService.setPolylines(latLngStatusModels);
  }
}
