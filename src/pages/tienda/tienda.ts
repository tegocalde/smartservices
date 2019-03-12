import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TiendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tienda',
  templateUrl: 'tienda.html',
})
export class TiendaPage {
tiendas:object;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.tiendas=[
      {
        nombre:"Agencia Bella",
        logo:"cam.ico",
      },
      {
        nombre:"Centro Jacquez",
        logo:"centroJaquez.ico",
      },
      {
        nombre:"Santo Domingo Motors",
        logo:"santoDomingo48.ico",

      },
      {
        nombre:"Delta Comercial",
        logo:"deltaComercial48.ico",
      }


    ]

  }

 

}
