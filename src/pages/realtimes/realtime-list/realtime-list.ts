import { Component, Output, EventEmitter, OnInit } from '@angular/core';

import { Translations, StatusService } from '../../shared';
import { RealtimeModel, RouteModel } from '../shared';

@Component({
  selector: 'app-realtime-list',
  templateUrl: 'realtime-list.html',
})
export class RealtimeList implements OnInit {

  @Output()
  public listClick = new EventEmitter();

  public routeModels: RouteModel[] = [];

  public t = Translations;

  public settingTemp: boolean;

  public checkTemp1;

  public checkTemp2;


  ngOnInit() {

  }

  constructor(
    private statusService: StatusService,
  ) {

  }

  createDataList(realtimeModel: RealtimeModel) {
    this.routeModels = realtimeModel.RouteList;

    for (var i = 0; i < this.routeModels.length; i++) {
      var r = this.routeModels[i];
      if (r.Temp1 === null)
        r.Temp1 = '-';
      if (r.Temp2 === null)
        r.Temp2 = '-';
    }
  }

  pushDataList(realtimeModel: RealtimeModel) {
    realtimeModel.RouteList.forEach((r) => {
      this.routeModels.push(r);
    })
  }

  rowClick(item: any) {
    this.listClick.emit(item);
  }
}