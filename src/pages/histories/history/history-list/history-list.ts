import { Component, Output, EventEmitter, OnInit } from '@angular/core';

import { Translations } from '../../../shared';
import { HistoryModel, HistoryEventsModel } from '../../shared';


@Component({
  selector: 'app-history-list',
  templateUrl: 'history-list.html'
})
export class HistoryList implements OnInit {

  @Output()
  public listClick = new EventEmitter();

  public historyEventModels: HistoryEventsModel[] = [];

  public historydbModel: HistoryModel;

  public t = Translations;

  public settingTemp: boolean;

  ngOnInit() {

  }

  constructor() {

  }

  createDataList(historyModel: HistoryModel) {
    this.historydbModel = historyModel;
    this.historyEventModels = historyModel.HistoryEvents;
  }

  pushDataList(historyModel: HistoryModel){
    historyModel.HistoryEvents.forEach((h)=>{
      this.historyEventModels.push(h);
    });
  }

  rowClick(item: any) {
    this.listClick.emit(item);
  }

}