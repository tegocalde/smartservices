import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PassPage } from '../pass/pass';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    

  }
  navegar()
  {
    this.navCtrl.push(PassPage);
  }

 
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
   
  }

}
