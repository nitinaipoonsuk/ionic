import { Component, ViewChild } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';

import { RealtimePage, RealtimeMapPage } from '../realtimes';
import { HistoryLicensePage } from '../history-license';
import { Translations } from '../shared';
import { MorePage } from '../more';
import { ReportSelectPage } from '../report-select';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  public t = Translations;

  public roles = []

  tab1Root: any = RealtimePage;
  tab2Root: any = HistoryLicensePage;
  tab3Root: any = ReportSelectPage;
  tab4Root: any = MorePage;

  showHistoryTap: boolean
  showReportTap: boolean
  showMoreTap: boolean

  constructor() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'))
    let roles = currentUser.roles

    roles.forEach(role => {
      if (!role.toLowerCase().includes("realtime")) {
        this.showHistoryTap = true
        this.showReportTap = true

      }
      else if (role.toLowerCase().includes("history"))
        this.showHistoryTap = true
      this.showMoreTap = true
    })
  }

  realtimeEvent() {
    console.log('realtimeEvent');
  }

  historyEvent() {
    console.log('historyEvent');

  }
}
