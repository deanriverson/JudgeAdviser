import {Component} from "@angular/core";
import {AppStoreService} from "../../services/app-store.service";
import {TournamentInfo} from "../../models/tournament-info";
import {Award} from "../../models/award";
import * as _ from "lodash";

@Component({
  selector: 'tournament-info',
  templateUrl: './tournament-info.component.html',
  styleUrls: ['./tournament-info.component.css']
})
export class TournamentInfoComponent {
  private awards: Award[] = [];
  private tournamentInfo: TournamentInfo = new TournamentInfo();

  constructor(private store: AppStoreService) {
    store.awards.subscribe(awards => this.awards = awards);

    store.tournamentInfo.subscribe(info => {
      this.tournamentInfo = info.$key ? info : this.tournamentInfo;
    });
  }

  onSaveTournamentInfo() {
    this.store.tournamentInfo.set(this.tournamentInfo);
  }

  onCreateAwards() {
    this.store.awards.remove();
    this.store.awardCategories.subscribe(categories => {
      _.each(categories, cat => {
        _.times(cat.numGiven, rank => this.store.awards.push(new Award(cat.name, rank + 1).toFirebase()));
      })
    });
  }
}
