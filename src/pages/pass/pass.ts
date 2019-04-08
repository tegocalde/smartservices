import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the PassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pass',
  templateUrl: 'pass.html',
})
export class PassPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  saltar()
  {
    this.navCtrl.push(LoginPage);
  }

  regreso()
  {
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PassPage');
  }

}
