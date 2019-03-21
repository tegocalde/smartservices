import { RepuestosPage } from './../repuestos/repuestos';
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
nombre: string="";
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.tiendas=[
      {
        nombre:"Empresa 1",
        logo:"logo1.ico",
        imagen: "logo1.JPG"

      },
      {
        nombre:"Empresa 2",
        logo:"logo2.ico",
        imagen: "logo2.JPG"
      },
      {
        nombre:"Empresa 3",
        logo:"logo3.ico",
        imagen: "logo3.JPG"


      },
      {
        nombre:"Empresa 4",
        logo:"logo4.ico",
        imagen: "logo4.JPG"
      },

      {
        nombre:"Empresa 5",
        logo:"logo5.ico",
        imagen: "logo5.JPG"

      },




    ]



  }
 public entrarPagina(Nombre,Logo)
  {
    this.navCtrl.push(RepuestosPage,{Nombre,Logo});
  }
 

}
