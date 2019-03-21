import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SeguimientoPage } from '../pages/seguimiento/seguimiento';
import { TiendaPage } from '../pages/tienda/tienda';
import { LoginPage} from '../pages/login/login';
import { ArticuloPage } from '../pages/articulo/articulo';
import { EncontrarPage } from '../pages/encontrar/encontrar';
import { AcercaPage } from '../pages/acerca/acerca';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ArticuloPage;

  pages: Array<{title: string, component: any,icon:string, valor:string}>;

  constructor(public platform: Platform , public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Principal',icon:'ios-cube-outline', component: HomePage, valor:'0' },
      { title: 'Seguimiento',icon:'ios-search-outline', component: SeguimientoPage, valor:'1'},
      { title: 'Tienda', icon:'ios-card-outline',component: TiendaPage , valor:'0'},
      { title: 'Encontrar Taller',icon:'ios-navigate-outline', component: EncontrarPage , valor:'0'},
      { title: 'Acerca de Nosotros',icon:'ios-globe-outline', component: AcercaPage , valor:'0'},

      { title: 'Cerrar Sesion',icon:'ios-exit-outline',component: LoginPage, valor:'0' }

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
