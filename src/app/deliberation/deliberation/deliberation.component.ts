import {Component, OnInit} from '@angular/core';
import {AppStoreService} from "../../services/app-store.service";
import {Award} from "../../models/award";
import {Team, FirebaseTeam} from "../../models/team";

import * as _ from 'lodash';

@Component({
  selector: 'app-deliberation',
  templateUrl: './deliberation.component.html',
  styleUrls: ['./deliberation.component.css']
})
export class DeliberationComponent implements OnInit {
  private awards: Award[];
  private teams: Team[];
  private sortedTeams: Team[];
  private teamListDisplay: number;

  constructor(private store: AppStoreService) {
    store.awardsObservable.subscribe(unused => this.awards = store.awards);
    store.teamsObservable.subscribe(teams => {
      this.teams = teams.map(t => new Team(t as FirebaseTeam));
      this.sortedTeams = _.sortBy(this.teams, t => t.id);
      this.createNominations(this.teams);
    });
  }

  ngOnInit() {
    this.teamListDisplay = 1;
  }

  setTeamListDisplay(index) {
    this.teamListDisplay = index;
  }

  private createNominations(teams: Team[]) {

  }

}
