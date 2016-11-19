import { Component, OnInit } from '@angular/core';
import {Award, FirebaseAward} from "../../models/award";
import {Team, FirebaseTeam} from "../../models/team";
import {AppStoreService} from "../../services/app-store.service";
import * as _ from 'lodash';

@Component({
  selector: 'award-list',
  templateUrl: './award-list.component.html',
  styleUrls: ['./award-list.component.css']
})
export class AwardListComponent implements OnInit {
  private awards: Award[] = [];
  private teams: Team[] = [];

  private mode = 1;

  constructor(private store:AppStoreService) {
    store.awardsObservable.subscribe(awards => {
      this.awards = _.map(awards, award => {
        let fbAward = award as FirebaseAward;
        return new Award(fbAward, store.findAwardCategoryByName(fbAward.category))
      });
    });

    store.teamsObservable.subscribe(teams => this.teams = teams.map(t => new Team(t as FirebaseTeam)));
  }

  ngOnInit() {
  }

  onSaveList() {
    let toFirebaseMapper = a => a.toFirebase();
    let awardsObs = this.store.awardsObservable;
    let updateWinners = fbAward => awardsObs.update(fbAward.$key, {winner: fbAward.winner});

    _(this.awards).map(toFirebaseMapper).each(updateWinners);
    this.mode = 1;
  }

  onEditList() {
    this.mode = 2;
  }
}
