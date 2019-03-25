import { ModalSeguimientoPage } from './../pages/modal-seguimiento/modal-seguimiento';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SeguimientoPage } from '../pages/seguimiento/seguimiento';
import { TiendaPage } from '../pages/tienda/tienda';
import { LoginPage } from '../pages/login/login';
import { RegistroPage } from '../pages/registro/registro';
import { RepuestosPage } from '../pages/repuestos/repuestos';
import { ArticuloPage } from '../pages/articulo/articulo';
import { EncontrarPage } from '../pages/encontrar/encontrar';
import { AcercaPage } from '../pages/acerca/acerca';
import { ConsultaPage } from '../pages/consulta/consulta';
import { PagoPage } from '../pages/pago/pago';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SeguimientoPage,
    TiendaPage,
    LoginPage,
    RegistroPage,
    ModalSeguimientoPage,
    RepuestosPage,
    ArticuloPage,
    EncontrarPage,
    AcercaPage,
    ConsultaPage,
    PagoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SeguimientoPage,
    TiendaPage,
    LoginPage,
    RegistroPage,
    ModalSeguimientoPage,
    RepuestosPage,
    ArticuloPage,
    EncontrarPage,
    AcercaPage,
    ConsultaPage,
    PagoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
