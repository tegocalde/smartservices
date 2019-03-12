import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RepuestosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-repuestos',
  templateUrl: 'repuestos.html',
})
export class RepuestosPage {
nombre:string="";
Logo:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.nombre=navParams.get("Nombre");
    this.Logo=navParams.get("Logo");

  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad RepuestosPage');
  }

}
