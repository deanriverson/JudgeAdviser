import {Component, OnInit, Input} from '@angular/core';
import {AppStoreService} from "../../services/app-store.service";
import {Team, FirebaseTeam} from "../../models/team";
import * as _ from 'lodash';

@Component({
  selector: 'nomination-list',
  templateUrl: './nomination-list.component.html',
  styleUrls: ['./nomination-list.component.css']
})
export class NominationListComponent implements OnInit {
  @Input() category: string;
  @Input() count: number;

  private teams: Team[];

  constructor(private store: AppStoreService) {
  }

  ngOnInit() {
    this.store.teamsObservable.subscribe(teams => {
      this.teams = _(teams)
        .map(t => new Team(t as FirebaseTeam))
        .filter(t => t[this.category + 'Nomination'] < this.count)
        .sortBy(t => t[this.category + 'Nomination'])
        .value();

      while (this.teams.length < this.count) {
        this.teams.push(null);
      }
    });
  }

}
