import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input
} from '@angular/core';

import * as moment from 'moment/moment';

import { Translations} from '../translate';
import { ToolHelper } from '../service';
import { ListModel, OptionModel, LicenseSearchService, SearchModel  } from './shared';

@Component({
  selector: 'app-license-search',
  templateUrl: './license-search.component.html',
  providers: [LicenseSearchService]
})
export class LicenseSearchComponent implements OnInit {

  @Output()
  public masterEvent = new EventEmitter();

  @Output()
  public outputSetDataSearch = new EventEmitter();

  @Input()
  private toolHelper: ToolHelper

  @Input()
  public options: OptionModel[];

  private t = Translations;

  public loading: boolean = false;

  public listModel: ListModel[];

  public id: number;

  public startDate: string;
  private startDateMin: string;
  private startDateMax: string;
  public startTime: string;

  public endDate: string;
  private endDateMin: string;
  private endDateMax: string;
  public endTime: string;

  dateLength: number = 1;
  notificationSelectOpts: any = {
    title: this.t.language.EndDate,
    cssClass: 'notification-select',
  };


  constructor(
    private service: LicenseSearchService
  ) {
    
  }

  ngOnInit() {
    let dateNow = new Date();
    dateNow.setHours(0, 0, 0);
    this.startDate = moment(dateNow).format();
    this.startTime = '00:00';
    this.endDate = moment(dateNow).format();
    this.endTime = '23:59'
    this.setLimitStartDate();
    this.setLimitEndDate();

  }

  private setLimitStartDate() {
    let dateSelectMin = new Date();
    dateSelectMin && dateSelectMin.setMonth(dateSelectMin.getMonth() - 3);
    this.startDateMin = moment(dateSelectMin).format('YYYY-MM-DD');
    this.startDateMax = moment(new Date()).format('YYYY-MM-DD');
  }

  public setLimitEndDate() {
    if (this.startDate) {
      this.endDate = this.startDate;
      var limitDate = new Date(this.startDate);
      this.endDateMin = moment(limitDate).format('YYYY-MM-DD');
      limitDate && limitDate.setDate(limitDate.getDate() + 7);
      limitDate = limitDate > new Date() ? new Date() : limitDate;
      this.endDateMax = moment(limitDate.toJSON()).format('YYYY-MM-DD');
    }
  }

  public get(): SearchModel {

    let timeSelect = this.startTime.split(':');
    let startDate: Date = new Date(new Date(this.startDate).setHours(+timeSelect[0], +timeSelect[1]));

    let endDate: Date;
    if (this.dateLength != 0) {
      endDate = new Date(startDate);
      endDate.setDate(endDate.getDate() + +this.dateLength);
      endDate.setSeconds(endDate.getSeconds() - 1); 
      console.log(endDate);
    }
    else{
      let endTime = this.endTime.split(':');
      endDate = new Date(new Date(this.endDate).setHours(+endTime[0], +endTime[1]));
    }
    
    return {
      Id: this.id,
      StartDate: moment(startDate).format(),
      EndDate: moment(endDate).format()
    }
  }

  searchEvent() {
    this.masterEvent.emit();
  }

}
