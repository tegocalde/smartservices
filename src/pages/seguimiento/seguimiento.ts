import { ModalSeguimientoPage } from './../modal-seguimiento/modal-seguimiento';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController, ViewController } from 'ionic-angular';

/**
 * Generated class for the SeguimientoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seguimiento',
  templateUrl: 'seguimiento.html',
})
export class SeguimientoPage {
  tiempo:string=new Date().toString();
  constructor(public navCtrl: NavController, public navParams: NavParams
              ,public mod:ModalController, public vista:ViewController) {

              }         
  agregarNota()
  {
const modal= this.mod.create(ModalSeguimientoPage);
modal.present();
 

  }
  cerrarNota()
  	{
      this.vista.dismiss();
    }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeguimientoPage');
  }


}
