import {Component} from "@angular/core";
import {CsvImportService} from "../../services/csv-import.service";
import {Team} from "../../models/team";
import {AppStoreService} from "../../services/app-store.service";
import {FirebaseListObservable} from "angularfire2";

@Component({
  selector: 'app-team-import',
  templateUrl: 'team-import.component.html',
  styleUrls: ['team-import.component.css'],
  providers: [CsvImportService]
})
export class TeamImportComponent {
  private error = "";
  private newTeams: Team[] = [];
  private currentTeams: FirebaseListObservable<Team>;

  constructor(private importService: CsvImportService, store: AppStoreService) {
    this.currentTeams = store.teams;
  }

  onSubmit() {
    this.currentTeams.remove();
    this.newTeams.forEach(t => this.currentTeams.push(t));
    this.newTeams = [];
  }

  onCancel() {
    this.newTeams = [];
  }

  onFilesDropped(files) {
    this.importService.verifyDroppedFiles(files)
      .then(file => this.importService.importTeamsFromFile(file))
      .then(teams => this.newTeams = teams)
      .catch(reason => this.error = reason);
  }
}
