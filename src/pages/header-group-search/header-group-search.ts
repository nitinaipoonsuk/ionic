import { Component, Input, Output, EventEmitter } from '@angular/core';

import {
  NavController,
  NavParams,
  ModalController
} from 'ionic-angular';

import { Translations, ListModel } from '../shared';

import { ChangeGroupPage } from '../change-group';

@Component({
  selector: 'page-header-group-search',
  templateUrl: 'header-group-search.html'
})
export class HeaderGroupSearchPage {

  static vehicleGroup?: ListModel;

  @Output()
  private masterEvent = new EventEmitter();

  @Input()
  private headerName: string;

  private t = Translations;
  public h = HeaderGroupSearchPage;
  private showSearch: boolean;
  public searchInput: string = '';


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) { }

  ionViewDidLoad() {
  }

  onInput(event) {
    console.log(this.searchInput);
    this.masterEvent.emit()
  }

  onCancel(event) {
    this.searchInput = '';
    this.showSearch = false;
    this.masterEvent.emit()
  }

  changeGroup() {
    let profileModal = this.modalCtrl.create(ChangeGroupPage);

    profileModal.onDidDismiss(() => {
      this.masterEvent.emit();

    });

    profileModal.present();
  }
}
