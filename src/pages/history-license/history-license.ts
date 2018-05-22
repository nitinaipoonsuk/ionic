import {
  Component,
  ViewChild
} from '@angular/core';

import {
  App,
  Alert,
  NavController,
  NavParams,
  InfiniteScroll
} from 'ionic-angular';

import { Observable } from 'rxjs/Rx';

import { HistoriesPage } from '../histories';

import {
  LicenseSearchService,
  ToolHelper,
  Translations,
  ListPagingModel,
  SearchService
} from '../shared';

import { LoginPage } from '../login';
import { HeaderGroupSearchPage } from '../header-group-search';

@Component({
  selector: 'page-history-license',
  templateUrl: 'history-license.html',
  providers: [LicenseSearchService]
})
export class HistoryLicensePage {

  @ViewChild(HeaderGroupSearchPage)
  header: HeaderGroupSearchPage;

  private t = Translations;

  public listModels: ListPagingModel = new ListPagingModel();

  public search: string = '';

  private skip: number = 0;

  private take: number = 30;

  private enabled: boolean = true;

  private loading: boolean = true;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toolHelper: ToolHelper,
    private licenseSearchService: LicenseSearchService,
    private app: App,
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LicenseListPage');
  }

  ionViewWillEnter() {
    let licenseModel = JSON.parse(localStorage.getItem('licenseModel'));
    if (licenseModel) {
      localStorage.removeItem('licenseModel');
      this.ChangePage(licenseModel);
    }
    this.getData(0, this.take).subscribe((data) => {
      if (data)
        this.listModels = data as ListPagingModel;
    },
      (err) => {
        this.loading = false;
        var alert: Alert = err.statusText ?
          this.toolHelper.alert(this.t.getByValueEn(err.statusText))
          :
          this.toolHelper.alert(this.t.language.ConnectionRefused)
        alert.present();

        alert.onDidDismiss(() => {
          this.getData(this.skip, this.take).subscribe();
        });

        return null;
      });
  }

  getData(skip: number, take: number): Observable<any> {
    let fromQuery = this.toolHelper.searchPagger(skip, take, this.header.searchInput, this.header.h.vehicleGroup ? this.header.h.vehicleGroup.Id : 0);
    return this.licenseSearchService.getLicense(fromQuery)
      .map((data) => {
        this.loading = false;
        if (data.Message) {
          var alert: Alert = this.toolHelper.alert(this.t.getByValueEn(data.Message));
          alert.present();
          return null;
        }

        else if (data.StatusCode) {
          var alert: Alert = this.toolHelper.alert(this.t.getByValueEn(data.Message));
          alert.present();
          return null;
        }

        else {
          return data;
        }
      })

  }

  ChangePage(data) {
    this.navCtrl.push(HistoriesPage, data);
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
          let listModels = data as ListPagingModel;
          this.listModels.DataAllLength = listModels.DataAllLength;
          listModels.ListModels.forEach((listModel) => {
            this.listModels.ListModels.push(listModel)
          })
        }
        else
          this.enabled = false;
        infiniteScroll.complete();
      },
      (err) => {
        this.loading = false;
        var alert: Alert = err.statusText ?
          this.toolHelper.alert(this.t.getByValueEn(err.statusText))
          :
          this.toolHelper.alert(this.t.language.ConnectionRefused)
        alert.present();

        alert.onDidDismiss(() => {
          this.getData(this.skip, this.take).subscribe();
        });

        return null;
      });
  }
}
