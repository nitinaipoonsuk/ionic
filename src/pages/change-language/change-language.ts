import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Translations, TranslationManage } from '../shared';

@Component({
  selector: 'page-change-language',
  templateUrl: 'change-language.html'
})
export class ChangeLanguagePage {

  public t = Translations;

  public language: string

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public translationManage: TranslationManage) { }

  ionViewDidLoad() {
    this.language = this.t.language.Lang;
  }

  save(){
    this.t.language = this.translationManage.get(this.language);
    this.navCtrl.pop();
  }

}
