import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage  {

  constructor(public afAuth: AngularFireAuth,) { 

  }
   signOut(){
     this.afAuth.auth.signOut().then(() => {
       location.reload();
     });
     }
   }

