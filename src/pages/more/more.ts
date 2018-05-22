import { Component } from '@angular/core';
import {
  NavController,
  NavParams,
  ActionSheetController,
  App,
  ViewController,
  ModalController
} from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { LoginPage } from '../login';
import { AuthService } from '../../auth';
import { ChangeLanguagePage } from '../change-language';
import { ChangePasswordPage } from '../change-password';
import { Translations, ToolHelper } from '../shared';
import { SettingreportSelectPage } from '../settingreport-select'
import { HelpPage } from '../../pages/help';

@Component({
  selector: 'page-more',
  templateUrl: 'more.html'
})
export class MorePage {

  public t = Translations;

  public settingpage: string = '';

  tempRealtime: boolean;

  tempHistory: boolean;

  showVehicleSetting: boolean
  showTempHistory: boolean

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private actionSheetCtrl: ActionSheetController,
    private authService: AuthService,
    private app: App,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController,
    public storage: Storage) {
      let currentUser = JSON.parse(localStorage.getItem('currentUser'))
    let roles = currentUser.roles

    roles.forEach(role => {
      if (!role.toLowerCase().includes("realtime")) {
        this.showVehicleSetting = true
        this.showTempHistory = true
      }
      else if (role.toLowerCase().includes("history"))
        this.showTempHistory = true
    })
  }

  ionViewDidLoad() {
    this.storage.get('settingtempRealtime').then((val) => {
      this.tempRealtime = val
    })
    this.storage.get('settingtempHistory').then((val) => {
      this.tempHistory = val
    })
  }
  ionViewWillLeave(){
    this.storage.set('settingtempRealtime', this.tempRealtime);
    this.storage.set('settingtempHistory', this.tempHistory);
  }

  changeLanguage() {
    let profileModal = this.modalCtrl.create(ChangeLanguagePage);
    profileModal.present();
  }

  changePassword() {
    let profileModal = this.modalCtrl.create(ChangePasswordPage);
    profileModal.present();
  }

  vehicleSetting() {
    this.navCtrl.push(SettingreportSelectPage);
  }

  logout() {
    let alert = this.actionSheetCtrl.create({
      title: this.t.language.SureLogOut,
      buttons: [
        {
          text: this.t.language.Logout,
          handler: () => {
            this.authService.logout();
            this.viewCtrl.dismiss();
            //this.storageclear();
            //this.navCtrl.setRoot(LoginPage);
            //this.navCtrl.parent.parent.setRoot(LoginPage);
            this.app.getRootNav().setRoot(LoginPage);
          }
        },
        {
          text: this.t.language.Close,
          role: 'cancel',
        }
      ]
    });
    alert.present();

  }

  storageclear() {
    /* this.storage.clear().then(() => {
       console.log('Keys have been cleared');
     });*/
    this.storage.set('introShown', false);
    /*this.storage.get('introShown').then(introShown => {

    });*/
  }

  helpSlides() {
    let helpModal = this.modalCtrl.create(HelpPage);
    helpModal.present();
  }
}
