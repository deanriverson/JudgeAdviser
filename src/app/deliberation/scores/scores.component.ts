import {Component} from "@angular/core";
import {Team, FirebaseTeam} from "../../models/team";
import {AppStoreService} from "../../services/app-store.service";
import {CsvImportService} from "../../services/csv-import.service";
import * as _ from 'lodash';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent {
  private error: string;
  private newTeams: Team[] = [];
  private currentTeams: Team[] = [];

  constructor(private store:AppStoreService, private importService:CsvImportService) {
    store.teamsObservable.subscribe(teams =>
      this.currentTeams = _(teams)
        .map(t => new Team(t))
        .sortBy(t => t.performanceRank)
        .value()
    );
  }

  onSubmit() {
    let toFirebaseMapper = t => t.toFirebase();
    let teamsObservable = this.store.teamsObservable;
    let updateScores = fbTeam => teamsObservable.update(fbTeam.$key, {scores: fbTeam.scores});

    _(this.newTeams).map(toFirebaseMapper).each(updateScores);
    this.newTeams = [];
  }

  onCancel() {
    this.newTeams = [];
  }

  onFilesDropped(files) {
    this.importService.verifyDroppedFiles(files)
      .then(file => {
        let teamsClone = this.currentTeams.map(t => Team.clone(t));
        return this.importService.importTeamScoresFromFile(file, teamsClone)
      })
      .then(teams => this.newTeams = _.sortBy(teams, t => t.performanceRank))
      .catch(reason => this.error = reason);
  }
}
