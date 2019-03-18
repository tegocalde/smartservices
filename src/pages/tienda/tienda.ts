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
        nombre:"Agencia Bella",
        logo:"agenciaBella.ico",
        imagen: "agenciaBella.png"

      },
      {
        nombre:"Bonanza Dominicana",
        logo:"bonanzaDominicana.ico",
        imagen: "santoDomingo.png"

      },
      {
        nombre:"Delta Comercial",
        logo:"deltaComercial48.ico",
        imagen: "deltaComercial.png"


      },
      {
        nombre:"Santo Domingo Motors",
        logo:"santoDomingo48.ico",
        imagen: "santoDomingo.png"
      },

      {
        nombre:"Grupo Viamar",
        logo:"viamar.ico",
        imagen: "santoDomingo.png"

      },




    ]



  }
 public entrarPagina(Nombre,Logo)
  {
    this.navCtrl.push(RepuestosPage,{Nombre,Logo});
  }
 

}
