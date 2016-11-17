import {Component, OnInit} from "@angular/core";
import {FirebaseListObservable} from "angularfire2";
import {Team} from "../../models/team";
import {AppStoreService} from "../../services/app-store.service";
import * as _ from "lodash";

@Component({
  selector: 'app-team-list',
  templateUrl: 'team-list.component.html',
  styleUrls: ['team-list.component.css'],
  providers: [AppStoreService]
})
export class TeamListComponent implements OnInit {
  selectedTeam: Team;
  teams: FirebaseListObservable<any>;

  constructor(private store: AppStoreService) {
    this.teams = store.teams;
  }

  ngOnInit() {
  }
}
