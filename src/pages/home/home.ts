import { Component, OnInit } from '@angular/core';
import {NavController} from 'ionic-angular';
import {ModalPage} from '../modal/modal';
import {EditPage} from '../edit/edit';
import {DetailsPage} from '../details/details';
import {Task} from '../../app/tasks';

import { AngularFire} from 'angularfire2';
import {FirebaseService} from '../../service/firebase.service';

import { ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements OnInit  {

  tasks : Task[];

  activeTask: string;
  activeCategory: string;

  constructor(
    af: AngularFire, 
    private nav: NavController, 
    private _firebaseService:FirebaseService,
    public actionSheetCtrl: ActionSheetController
    ) {
    this.nav = nav;
    this.tasks=[];

  }

  ngOnInit(){
    this._firebaseService.getTasks().subscribe(tasks => {
      console.log(tasks);
      this.tasks = tasks
    })
  }

  changeState(key){
    if(key){
      console.log('Changing key to: '+key);
    }
  }

  showEdit(task, key){
    this.nav.push(EditPage ,{
     TaskPassed: task.task,
     CategoryPassed: task.category,
     NotesPassed: task.notes,
     KeyPassed: key
    });
  }

  deleteTask(key){
     let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
                this._firebaseService.deleteTask(key);
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  showModal(){
    this.nav.push(ModalPage);
  }

  taskselected(event, task){
    this.nav.push(DetailsPage, {
      task:task
    })
  }
}
