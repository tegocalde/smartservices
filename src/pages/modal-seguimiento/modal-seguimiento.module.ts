import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalSeguimientoPage } from './modal-seguimiento';

@NgModule({
  declarations: [
    ModalSeguimientoPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalSeguimientoPage),
  ],
})
export class ModalSeguimientoPageModule {}
