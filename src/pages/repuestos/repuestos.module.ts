import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RepuestosPage } from './repuestos';

@NgModule({
  declarations: [
    RepuestosPage,
  ],
  imports: [
    IonicPageModule.forChild(RepuestosPage),
  ],
})
export class RepuestosPageModule {}
