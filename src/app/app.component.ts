import { Component} from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HomePage } from '../pages/home/home';
import {FirebaseService} from '../service/firebase.service';


@Component({
  templateUrl: 'app.html',
  providers: [FirebaseService]
})
export class MyApp{
  rootPage = HomePage;
  constructor(platform: Platform, private _firebaseService:FirebaseService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
