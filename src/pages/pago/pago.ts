import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarritoPage } from '../carrito/carrito';

/**
 * Generated class for the PagoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pago',
  templateUrl: 'pago.html',
})
export class PagoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  pagar()
  {
    this.navCtrl.push(CarritoPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagoPage');
  }

}
