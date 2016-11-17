import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import {MaterialModule} from "@angular/material";

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from "./app.routing";
import { TeamCardComponent } from './teams/team-card/team-card.component';
import { JudgeCardComponent } from './judges/judge-card/judge-card.component';
import { JudgeImportComponent } from './judges/judge-import/judge-import.component';

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
    routingComponents,
    TeamCardComponent,
    JudgeCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
