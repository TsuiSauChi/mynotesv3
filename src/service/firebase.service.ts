import {Injectable} from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import {Task} from '../app/tasks';

@Injectable()
export class FirebaseService{
    tasks: FirebaseListObservable<Task[]>;

    
    constructor(private _af: AngularFire){

    }

    getTasks(){
        this.tasks = this._af.database.list('/tasks') as
        FirebaseListObservable<Task[]>;

        return this.tasks;
    }

    addTask(newTask){
        return this.tasks.push(newTask);
    }

    updateTask(key, updTask){
        return this.tasks.update(key, updTask);
    }

    deleteTask(key){
        return this.tasks.remove(key);
    }
}
