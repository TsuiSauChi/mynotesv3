import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {HomePage} from '../home/home';
import {FirebaseService} from '../../service/firebase.service'

/*
  Generated class for the Details page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {
  public task: any;
  constructor(
    public navCtrl: NavController,
     public navParams: NavParams, 
     private _firebaseService: FirebaseService) {
      this.task = navParams.get('task');
     }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
