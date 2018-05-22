import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import {
  App,
  Alert,
  NavController,
  ModalController
} from 'ionic-angular';

import { Observable } from 'rxjs/Rx';

import {
  MenuController,
  InfiniteScroll
} from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { LoginPage } from '../login/login';
import { AuthService } from '../../auth';
import { Translations, ToolHelper, MarkerModel } from '../shared';
import { RealtimeModel, RouteModel, RealtimeService } from './shared';
import { RealtimeList } from './realtime-list/realtime-list';
import { RealtimeMapPage } from './realtime-map/realtime-map';
import { ChangeGroupPage } from '../change-group';
import { HeaderGroupSearchPage } from '../header-group-search';
import { MorePage } from '../more';


@Component({
  selector: 'page-realtimes',
  templateUrl: 'realtimes.html',
  providers: [RealtimeService]
})

export class RealtimePage implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(HeaderGroupSearchPage)
  header: HeaderGroupSearchPage;

  @ViewChild(RealtimeList)
  realtimeList: RealtimeList;

  public loginName: string

  public realtimeModel: RealtimeModel = new RealtimeModel();

  public ticks;

  private t = Translations;

  private enabled: boolean = true;

  private skip: number = 0;

  private take: number = 30;

  private subScription;

  public markers: MarkerModel[];

  loading: boolean = true;

  constructor(
    private realtimeService: RealtimeService,
    private toolHelper: ToolHelper,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private authService: AuthService,
    public storage: Storage
  ) {
  }

  ngOnInit() {
    this.loginName = '';
  }

  ngAfterViewInit() {

  }

  ngOnDestroy() {
    this.subScription && this.subScription.unsubscribe();
  }

  ionViewWillEnter() {
    this.loading = true;
    this.realtimeList.routeModels = [];

    setTimeout(() => {
      this.storage.get('settingtempRealtime').then((val) => {
        this.realtimeList.settingTemp = val
      });
    }, 1000);

    this.getData(0, this.take).subscribe((data) => {
      this.realtimeList.createDataList(this.realtimeModel);
    },
      (err: Response) => {
        this.loading = false;
        var alert: Alert = err.statusText ?
          this.toolHelper.alert(this.t.getByValueEn(err.statusText))
          :
          this.toolHelper.alert(this.t.language.ConnectionRefused)

        alert.onDidDismiss(() => {
          this.authService.logout();
          this.navCtrl.parent.parent.setRoot(LoginPage);
        });
        alert.present();

      });
  }

  ionViewWillLeave() {
    this.subScription && this.subScription.unsubscribe();
  }

  changeGroup() {
    let profileModal = this.modalCtrl.create(ChangeGroupPage);
    profileModal.present();
  }

  getData(skip: number, take: number): Observable<boolean> {
    var fromQuery = this.toolHelper.searchPagger(skip, take, this.header.searchInput, this.header.h.vehicleGroup ? this.header.h.vehicleGroup.Id : 0);
    return this.realtimeService.gets(fromQuery)
      .map((data) => {
        this.loading = false;
        if (data.Message) {
          let alert = this.toolHelper.alert(this.t.getByValueEn(data.Message));
          alert.present();
          return false;
        }

        else if (data.StatusCode) {
          let alert = this.toolHelper.alert(this.t.getByValueEn(data.StatusCode));
          alert.present();
          return false;
        }

        else {
          this.realtimeModel = this.realtimeService.mappingToRealtimeModel(data as RealtimeModel);
          this.updateData();
          return true;
        }

      });
  }

  updateData() {
    this.subScription && this.subScription.unsubscribe();
    let timer = Observable.timer(2000, 1000);
    this.subScription = timer.subscribe(t => {
      this.ticks = 60 - t;
      if (this.ticks < 1) {
        this.subScription.unsubscribe();
        this.getData(0, this.realtimeList.routeModels.length).subscribe((data) => {
          if (data)
            this.realtimeList.createDataList(this.realtimeModel);
        },
          (err: Response) => {
            this.loading = false;
            var alert: Alert = err.statusText ?
              this.toolHelper.alert(this.t.getByValueEn(err.statusText))
              :
              this.toolHelper.alert(this.t.language.ConnectionRefused)

            alert.onDidDismiss(() => {
              this.updateData();
            });
            alert.present();

          });
      }
    });
  }

  doInfinite(infiniteScroll: InfiniteScroll) {
    if (!this.enabled || this.realtimeList.routeModels.length >= this.realtimeModel.DataAllLength) {
      infiniteScroll.complete();
      return;
    }

    this.skip += 30;
    this.getData(this.skip, this.take)
      .subscribe((res) => {
        if (res)
          this.realtimeList.pushDataList(this.realtimeModel);
        else
          this.enabled = false;
        console.log(this.realtimeList.routeModels.length);
        infiniteScroll.complete();
      },
      (err: Response) => {
        this.loading = false;
        var alert: Alert = err.statusText ?
          this.toolHelper.alert(this.t.getByValueEn(err.statusText))
          :
          this.toolHelper.alert(this.t.language.ConnectionRefused)

        alert.onDidDismiss(() => {
          this.updateData();
        });
        alert.present();

      });
  }

  openMap(data: RouteModel) {
    this.navCtrl.push(RealtimeMapPage, data);
  }
}
