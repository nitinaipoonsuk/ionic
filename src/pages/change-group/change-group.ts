import { Component } from '@angular/core';
import {
  NavController,
  Alert,
  NavParams,
  InfiniteScroll
} from 'ionic-angular';

import { Observable } from 'rxjs/Rx';

import {
  LicenseSearchService,
  ToolHelper,
  Translations,
  ListPagingModel
} from '../shared';

import { HeaderGroupSearchPage } from '../header-group-search';


@Component({
  selector: 'page-change-group',
  templateUrl: 'change-group.html',
  providers: [LicenseSearchService]
})
export class ChangeGroupPage {

  private t = Translations;
  private h = HeaderGroupSearchPage;

  public listModels: ListPagingModel = new ListPagingModel();

  private skip: number = 0;

  private take: number = 30;

  private enabled: boolean = true;

  private currentGroup: number = 0;

  private showSearch: boolean;

  public searchInput: string = '';

  constructor(
    public navCtrl: NavController,
    private toolHelper: ToolHelper,
    private licenseSearchService: LicenseSearchService,
    public navParams: NavParams) {
  }

  ionViewWillEnter() {
    if (this.h.vehicleGroup)
      this.currentGroup = this.h.vehicleGroup.Id;
    this.getData(0, this.take).subscribe((data) => {
      if (data)
        this.listModels = data as ListPagingModel;
    });
  }

  getData(skip: number, take: number): Observable<any> {
    let fromQuery = this.toolHelper.searchPagger(skip, take, this.searchInput);
    return this.licenseSearchService.getVehicleGroup(fromQuery)
      .map((data) => {
        if (data.Message) {
          var alert: Alert = this.toolHelper.alert(this.t.getByValueEn(data.Message));
          alert.present();
          return null;
        }

        else {
          return data;
        }
      },
      (err) => {
        var alert: Alert = err.statusText ?
          this.toolHelper.alert(this.t.getByValueEn(err.statusText))
          :
          this.toolHelper.alert(this.t.language.ConnectionRefused)
        alert.present();
        return null;
      });
  }

  doInfinite(infiniteScroll: InfiniteScroll) {
    if (!this.enabled || this.listModels.ListModels.length == this.listModels.DataAllLength) {
      infiniteScroll.complete();
      return;
    }
    this.skip += 30;
    this.getData(this.skip, this.take)
      .subscribe((data) => {
        if (data) {
          let listModel = data as ListPagingModel;
          this.listModels.DataAllLength = listModel.DataAllLength;
          listModel.ListModels.forEach((listModel) => {
            this.listModels.ListModels.push(listModel)
          })
        }
        else
          this.enabled = false;
        infiniteScroll.complete();
      });
  }

  rowClick(data) {

    this.h.vehicleGroup = data;
    this.navCtrl.pop();
  }

  onInput(event) {
    this.ionViewWillEnter();
  }

  onCancel(event) {
    this.searchInput = '';
    this.showSearch = false;
    this.ionViewWillEnter();
  }
}
