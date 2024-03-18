import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CulturageneralPageRoutingModule } from './culturageneral-routing.module';

import { CulturageneralPage } from './culturageneral.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CulturageneralPageRoutingModule
  ],
  declarations: [CulturageneralPage]
})
export class CulturageneralPageModule {}
