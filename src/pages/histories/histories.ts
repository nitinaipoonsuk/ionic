import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Translations, ToolHelper, LicenseSearchComponent, SearchModel, ListModel } from '../shared';
import { HistoryPage } from './history'


@Component({
  selector: 'page-histories',
  templateUrl: 'histories.html'
})
export class HistoriesPage {

  @ViewChild(LicenseSearchComponent)
  licenseSearchComponent: LicenseSearchComponent;

  public t = Translations;

  public licenseModel: ListModel = new ListModel();

  public searchModel: SearchModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toolHelper: ToolHelper
  ) { }



  ionViewDidLoad() {
    this.licenseModel = this.navParams.data as ListModel;
    this.licenseSearchComponent.id = this.licenseModel.Id;
  }

  ChangePage() {
    this.searchModel = this.licenseSearchComponent.get()
    this.searchModel.License = this.licenseModel.Name;
    this.navCtrl.push(HistoryPage, this.searchModel);
  }

}
