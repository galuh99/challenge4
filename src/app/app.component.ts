import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Semua resep',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Makanan',
      url: '/list',
      icon: 'pizza'
    },
    {
      title: 'Minuman',
      url: '/minuman',
      icon: 'beer'
    },
    {
      title: 'Profil',
      url: '/profil',
      icon: 'contact'
    },
    {
      title: 'Beri Ulasan',
      url: '/ulasan',
      icon: 'chatboxes'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
