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
import { ErrorMessageComponent } from './common/error-message/error-message.component';
import { DropTargetComponent } from './common/drop-target/drop-target.component';
import { TournamentInfoComponent } from './tournament/tournament-info/tournament-info.component';
import { DeliberationComponent } from './deliberation/deliberation/deliberation.component';
import { AwardSlotComponent } from './deliberation/award-slot/award-slot.component';
import { RobotPerformanceListComponent } from './deliberation/robot-performance-list/robot-performance-list.component';
import { ScoresComponent } from './deliberation/scores/scores.component';
import { DeliberationTeamCardComponent } from './deliberation/deliberation-team-card/deliberation-team-card.component';
import { DeliberationTeamListComponent } from './deliberation/deliberation-team-list/deliberation-team-list.component';
import { JudgingScoresListComponent } from './deliberation/judging-scores-list/judging-scores-list.component';

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
    JudgeCardComponent,
    ErrorMessageComponent,
    DropTargetComponent,
    TournamentInfoComponent,
    DeliberationComponent,
    AwardSlotComponent,
    RobotPerformanceListComponent,
    ScoresComponent,
    DeliberationTeamCardComponent,
    DeliberationTeamListComponent,
    JudgingScoresListComponent
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
