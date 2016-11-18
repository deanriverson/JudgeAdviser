import {Component} from "@angular/core";
import {AppStoreService} from "../../services/app-store.service";
import {TournamentInfo} from "../../models/tournament-info";
import {Award, FirebaseAward} from "../../models/award";
import * as _ from "lodash";
import {AwardCategory} from "../../models/award-category";

@Component({
  selector: 'tournament-info',
  templateUrl: './tournament-info.component.html',
  styleUrls: ['./tournament-info.component.css']
})
export class TournamentInfoComponent {
  private awards: Award[] = [];
  private tournamentInfo: TournamentInfo = new TournamentInfo();

  constructor(private store: AppStoreService) {
    store.awardsObservable.subscribe(awards => this.awards = store.awards);
    store.tournamentInfoObservable.subscribe(info => {
      this.tournamentInfo = info.$key ? info : this.tournamentInfo;
    });
  }

  onSaveTournamentInfo() {
    this.store.tournamentInfoObservable.set(this.tournamentInfo);
  }

  onCreateAwards() {
    this.store.awardsObservable.remove();
    _.each(this.store.awardCategories, cat => {
      let awardCreator = this.getAwardCreatorForCategory(cat);
      _.times(cat.numGiven, awardCreator);
    });
  }

  private getAwardCreatorForCategory(cat:AwardCategory): (number)=>void {
    return rank => this.store.awardsObservable.push({category: cat.name, rank: rank+1, script: '', winner: ''} as FirebaseAward);
  }
}
