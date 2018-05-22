import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading } from 'ionic-angular';
//import { TouchID } from 'ionic-native';

import { AuthService, LoginModel } from '../../auth';
import { Translations, ToolHelper } from '../shared';
import { TabsPage } from '../tabs/tabs';
import { from } from 'rxjs/observable/from';

@Component({
  selector: 'page-login',
  templateUrl: './login.html'
})
export class LoginPage {

  public model = new LoginModel()
  public error?: string;

  public t = Translations;
  private loading: boolean = false;

  private LOGO = "assets/images/logo/logo.png";

  private alert: any;

  constructor(
    private authService: AuthService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private toolHelper: ToolHelper,
    private nav: NavController
  ) {

  }

  ionViewWillEnter() {
    //console.log('clear');

    //localStorage.clear();
  }

  /*touchId() {
    TouchID.verifyFingerprint('Touch ID สำหรับ "BTrack Touch"')
      .then(
      res => {
        let token = JSON.parse(localStorage.getItem('touchId')) && JSON.parse(localStorage.getItem('touchId')).token;
        if (token) {
          this.authService.setToken(token)
          this.nav.setRoot(TabsPage);
        }
        else
          this.showError("TouchID is not available")
      }
      ,
      err => this.showError("TouchID is not available")
      );
  }*/

  login(): void {
    this.loading = true;

    this.authService.login(this.model.Username.toLowerCase(), this.model.Password, this.model.Remember)
      .subscribe((result) => {
        this.loading = false;
        if (result) {
          this.nav.setRoot(TabsPage);
        } else {
          let alert = this.toolHelper.alert(this.t.language.Password + this.t.language.DoNot + this.t.language.Match)
          alert.present();
        }
      },
      (error: Response) => {
        this.loading = false;
        if (error && error.status == 400) {
          this.alert = this.toolHelper.alert(this.t.language.Password + this.t.language.DoNot + this.t.language.Match)
        }
        else
          this.alert = this.toolHelper.alert(this.t.language.ConnectionRefused)

        this.alert.present();
      });
  }
}
