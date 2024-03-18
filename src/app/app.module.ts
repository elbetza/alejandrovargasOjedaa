import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAW468pkaK_ccRbs0brPVtVSLc6aYeUjis",
  authDomain: "proyecto-64dc0.firebaseapp.com",
  databaseURL: "https://proyecto-64dc0-default-rtdb.firebaseio.com",
  projectId: "proyecto-64dc0",
  storageBucket: "proyecto-64dc0.appspot.com",
  messagingSenderId: "699098292102",
  appId: "1:699098292102:web:ab913dab871e7aad40d607"
};
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
