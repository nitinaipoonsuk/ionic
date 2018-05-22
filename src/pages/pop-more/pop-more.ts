import { Component, ViewChild, ElementRef } from '@angular/core';
import {
  PopoverController, NavParams, AlertController, App,
  ViewController
} from 'ionic-angular';

import { Translations } from '../shared';
import { LoginPage } from '../login';
import { AuthService } from '../../auth';

@Component({
  selector: 'page-pop-more',
  templateUrl: 'pop-more.html'
})
export class PopMorePage {

  private t = Translations;

  constructor(
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private authService: AuthService,
    private app: App,
    public viewCtrl: ViewController
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopOverPage');
  }

  logout() {
    let alert = this.alertCtrl.create({
      title: 'ออกจากระบบ',
      message: 'คุณต้องการออกจากระบบ ?',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
        },
        {
          text: 'ตกลง',
          handler: () => {
            this.authService.logout();
            this.viewCtrl.dismiss();
            this.app.getRootNav().setRoot(LoginPage);
          }
        }
      ]
    });
    alert.present();
    
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
