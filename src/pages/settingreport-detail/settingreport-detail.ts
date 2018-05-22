import { Component, Output, } from '@angular/core';
import { App, Alert, NavController, NavParams, InfiniteScroll, AlertController } from 'ionic-angular';


import { SettingreportPage, SettingReportService, SettingreportListModel, SettingreportModel } from '../settingreport';

import { ToolHelper, Translations } from '../shared';
/*
  Generated class for the SettingreportDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settingreport-detail',
  templateUrl: 'settingreport-detail.html',
  providers: [SettingReportService]
})
export class SettingreportDetailPage {

  public listModels: SettingreportModel[];

  private model: SettingreportModel = new SettingreportModel();
  

  private t = Translations;

  public searchInput: string = '';

  public licenseIds:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App,
    private settingReportService: SettingReportService, private toolHelper: ToolHelper, public alertCtrl: AlertController) {

    this.licenseIds = navParams.get('licenseIds');

  }

  ionViewDidEnter(){
    this.getData(this.licenseIds);
  }


  vehicleSetting() {
    this.navCtrl.push(SettingreportPage,{Ids: this.licenseIds});
  }

  getData(vehicleIds) {
    this.model.LicenseIds = vehicleIds;
    this.settingReportService.getVehicleDetail(this.model)
      .subscribe((data) => {
        if (data) {   
          this.listModels = data as SettingreportModel[];   
        }
        else if (data.Message) {
          this.toolHelper.alert(this.t.getByValueEn(data.Message));
        }
        else {
          return true;
        }
      },
      (err) => {
        this.toolHelper.loader.dismiss();
        var alert: Alert = err.statusText ?
          this.toolHelper.alert(this.t.getByValueEn(err.statusText))
          :
          this.toolHelper.alert(this.t.language.ConnectionRefused)
        alert.present().then((success) => {
          //this.app.getRootNav().setRoot(LoginPage);
        });

      });
  }

    toggleDetails(data) {
    if (data.showDetails) {
      data.showDetails = false;
    } else {
      data.showDetails = true;
    }
  }

}
