import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { LoginPage } from '../login';
import { Storage } from '@ionic/storage';
import { MorePage } from '../more';

/**
 * Generated class for the HelpPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {
  @ViewChild(Slides) slides: Slides;

  private loginimage = "assets/images/help_slides_images/n_1.jpg";
  private realtimeimage = "assets/images/help_slides_images/n_3.jpg";
  private realtimeimage1 = "assets/images/help_slides_images/n_4.jpg";
  private realtimeimage2 = "assets/images/help_slides_images/n_7.jpg";
  private realtimeimage3 = "assets/images/help_slides_images/n_9.jpg";
  private realtimeimage4 = "assets/images/help_slides_images/n_12.jpg";


  private shownTabPage: boolean;

  private image: any[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public viewCtrl: ViewController) {

    storage.get('introShown').then((result) => {
      this.shownTabPage = result;
    });

    this.image = [this.loginimage, 
      this.realtimeimage, 
      this.realtimeimage1, 
      this.realtimeimage2, 
      this.realtimeimage3,
      this.realtimeimage4
    ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpPage');
  }

  ionViewDidEnter() {
    //this.getStorage();
    this.slides.update();
    setTimeout(() => {
      this.slides.autoplay = 2000;
      this.slides.startAutoplay();
      //this.slideChanged();
    }, 500);
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();

    if (currentIndex === this.image.length) {
      console.log('shownTabPage = ' + this.shownTabPage);
      setTimeout(() => {
        this.storage.set('introShown', true)
        this.viewCtrl.dismiss();
      }, 3000);
    }
  }

  Close() {
    this.storage.set('introShown', true)
    this.viewCtrl.dismiss()
  }
}
