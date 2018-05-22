import { Component } from '@angular/core';
import { Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { HelpPage } from '../pages/help';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any = LoginPage;
  loader: any;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public storage: Storage
  ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      storage.get('introShown').then((result) => {
        if (JSON.parse(localStorage.getItem('currentUser'))
          && JSON.parse(localStorage.getItem('currentUser')).token)
          this.rootPage = TabsPage;
        if (!result) this.helpSlides();
      });
    });
  }

  /*
  public rootPage: any = HomePage;

  constructor(
    platform: Platform) {

    platform.ready().then(() => {
      //StatusBar.styleDefault();
      Splashscreen.hide();
      storage.get('introShown').then((result) => {

        if (JSON.parse(localStorage.getItem('currentUser'))
          && JSON.parse(localStorage.getItem('currentUser')).token)
          this.rootPage = TabsPage;
        if (!result) this.helpSlides();
      });
    });
  }*/

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Authenticating..."
    });
    this.loader.present();
  }

  helpSlides() {
    let helpModal = this.modalCtrl.create(HelpPage);
    helpModal.present();
  }
}
