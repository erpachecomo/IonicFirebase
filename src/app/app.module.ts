import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//Firebase
import { AngularFireModule } from 'angularfire2';
export const CONFIG = {
    apiKey: "AIzaSyCaZCGbwOGmCCGlfUp4ewVIlKOGNBFK21E",
    authDomain: "fir-9d506.firebaseapp.com",
    databaseURL: "https://fir-9d506.firebaseio.com",
    projectId: "fir-9d506",
    storageBucket: "fir-9d506.appspot.com",
    messagingSenderId: "1092933195280"
}
//Notificaciones
import { CloudModule, CloudSettings } from '@ionic/cloud-angular';
const CLOUDSETTINGS: CloudSettings = {
  core:{
    app_id:'8ed28597'
  },
  push:{
    sender_id:'1092933195280',
    pluginConfig:{
      ios:{
        badge: true,
        sound: true
      },
      android:{
        iconColor:'#343434'
      }
    }
  }
}
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(CONFIG),
    CloudModule.forRoot(CLOUDSETTINGS)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
