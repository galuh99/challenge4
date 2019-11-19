import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilPageRoutingModule } from './profil-routing.module';

import { ProfilPage } from './profil.page';
import { FirebaseUIModule } from 'firebaseui-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FirebaseUIModule,
    IonicModule,
    ProfilPageRoutingModule
  ],
  declarations: [ProfilPage]
})
export class ProfilPageModule {}
