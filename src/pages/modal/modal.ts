import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import {FirebaseService} from '../../service/firebase.service';
import {HomePage} from '../home/home';


/*
  Generated class for the Modal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html'
})
export class ModalPage {

  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams, 
      public viewCtrl: ViewController, 
      private _firebaseService:FirebaseService) {
    this.navCtrl = navCtrl;
    this.navParams = navParams;
    this.viewCtrl = viewCtrl;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  close(){
    this.viewCtrl.dismiss();
  }

  addTask(
    task: string,
    category: string,
    notes: string){

      var newTask = {
        task: task,
        category : category,
        notes : notes
      }

      console.log(newTask);

      this._firebaseService.addTask(newTask);
      this.navCtrl.push(HomePage);
    }    

}
