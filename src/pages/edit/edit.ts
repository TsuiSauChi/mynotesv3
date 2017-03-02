import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import {FirebaseService} from '../../service/firebase.service';
import {HomePage} from '../home/home';

/*
  Generated class for the Edit page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html'
})
export class EditPage {

activeTask: string;
activeCategory: string;
activeKey: string;
activeNotes: string;

constructor(
      public navCtrl: NavController, 
      public navParams: NavParams, 
      public viewCtrl: ViewController, 
      private _firebaseService:FirebaseService) {
    this.navCtrl = navCtrl;
    this.navParams = navParams;
    this.viewCtrl = viewCtrl;
    this.activeTask = navParams.get("TaskPassed");
    this.activeCategory = navParams.get("CategoryPassed");
    this.activeNotes = navParams.get("NotesPassed");
    this.activeKey = navParams.get("KeyPassed");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  close(){
    this.viewCtrl.dismiss();
  }


  showEdit(task){
    this.activeTask = task.task,
    this.activeCategory = task.priority,
    this.activeNotes = task.notes,
    this.activeKey = task.key
  }

  updateTask(){
    var updTask = {
      key:this.activeKey,
      task:this.activeTask,
      priority: this.activeCategory,
      notes: this.activeNotes
    }
    console.log(updTask);
    this._firebaseService.updateTask(this.activeKey, updTask);
    this.navCtrl.push(HomePage);
  }
}

