import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import {ModalPage} from '../pages/modal/modal';
import {EditPage} from '../pages/edit/edit';
import {DetailsPage} from '../pages/details/details';

import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyDO5_XXGs7UVaZEIJT2zlmsug4w51GbnGM',
  authDomain: 'mynotes-5f13b.firebaseapp.com',
  databaseURL: 'https://mynotes-5f13b.firebaseio.com',
  storageBucket: 'mynotes-5f13b.appspot.com',
  messagingSenderId: '736004627953'
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ModalPage,
    EditPage,
    DetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ModalPage,
    EditPage,
    DetailsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
