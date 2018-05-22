import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Translations, ToolHelper } from '../shared';
import { ChangePasswordService, AccountModel } from './shared'

@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
  providers: [ChangePasswordService]
})
export class ChangePasswordPage {

  private t = Translations;

  public username: string;

  public error: boolean;

  public model: AccountModel = new AccountModel();

  public loading: boolean = false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private changePasswordService: ChangePasswordService,
    private toolHelper: ToolHelper) { }

  ionViewDidLoad() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.username = currentUser && currentUser.username;
  }

  save() {
    this.loading = true;
    this.changePasswordService.changePassword(this.model).subscribe((data) => {
      this.loading = false;
      if (data)
        this.navCtrl.pop();
      else
        this.error = true;
    },
      (error) => {
        this.loading = false;
        let alert = this.toolHelper.alert(this.t.language.ConnectionRefused)
        alert.present();
      });
  }

  onInput() {
    this.error = false;
  }

}
