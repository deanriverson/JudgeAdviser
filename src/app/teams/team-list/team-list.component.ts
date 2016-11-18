import {Component, OnInit} from "@angular/core";
import {Team} from "../../models/team";
import {AppStoreService} from "../../services/app-store.service";

@Component({
  selector: 'app-team-list',
  templateUrl: 'team-list.component.html',
  styleUrls: ['team-list.component.css'],
  providers: [AppStoreService]
})
export class TeamListComponent implements OnInit {
  selectedTeam: Team;
  teams: Team[];

  constructor(private store: AppStoreService) {
    store.teamsObservable.subscribe(teams => {
      this.teams = teams.sort((a,b) => a.id - b.id);
    });
  }

  ngOnInit() {
  }
}
