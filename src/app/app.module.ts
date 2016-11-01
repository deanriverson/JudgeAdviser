import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { TeamDetailsComponent } from './team-details/team-details.component';

export const firebaseConfig = {
  apiKey: "AIzaSyC1Jc-F325IBXRdgOb3h20JxJKeuaWt42o",
  authDomain: "judgeadvisor.firebaseapp.com",
  databaseURL: "https://judgeadvisor.firebaseio.com",
  storageBucket: "judgeadvisor.appspot.com",
  messagingSenderId: "1007941678332"
};

@NgModule({
  declarations: [
    AppComponent,
    TeamDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
