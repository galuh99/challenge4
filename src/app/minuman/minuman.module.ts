import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinumanPageRoutingModule } from './minuman-routing.module';

import { MinumanPage } from './minuman.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinumanPageRoutingModule
  ],
  declarations: [MinumanPage]
})
export class MinumanPageModule {}
