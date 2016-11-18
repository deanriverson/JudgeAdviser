import { Component, OnInit } from '@angular/core';
import {Team} from "../../models/team";
import {AppStoreService} from "../../services/app-store.service";

@Component({
  selector: 'deliberation-team-list',
  templateUrl: './deliberation-team-list.component.html',
  styleUrls: ['./deliberation-team-list.component.css']
})
export class DeliberationTeamListComponent implements OnInit {
  private teams: Team[];

  constructor(store: AppStoreService) {
    store.teamsObservable.subscribe(teams => {
      this.teams = teams
        .map(t => new Team(t))
        .sort((a, b) => a.id - b.id)
    });
  }

  ngOnInit() {
  }

}
