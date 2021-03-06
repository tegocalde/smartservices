import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegistroPage } from '../registro/registro';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pageagit ingit remote
 * s aand nasvigatiosn.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  usuario:string;
  pass:string;


  constructor(public navCtrl: NavController, public navParams: NavParams, public alerta:AlertController, public menu:MenuController) {
    this.menu.enable(false);

  }


  entrar()
  {
    if(this.pass=="" || this.usuario=="")
    {
      let mialerta= this.alerta.create({
        
        title: "",
      message:"Usuario o Contraseña Incorrecto",
    buttons:["Entendido"]});
    mialerta.present();
    }
    else
    
    if (this.usuario=="edward"&& this.pass=="123456")
    {
      this.navCtrl.setRoot(HomePage);

    }
    else
    {
     let mialerta= this.alerta.create({
        
        title: "",
      message:"Usuario o Contraseña Incorrecto",
    buttons:["Entendido"]});
    mialerta.present();
    }
  }

  registrar()
  {
    this.navCtrl.push(RegistroPage);
  }

  salir()
  {
    this.navCtrl.setRoot(LoginPage);
  }

  

}
