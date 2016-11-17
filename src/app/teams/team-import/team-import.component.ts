import { Component, OnInit } from '@angular/core';
import {CsvImportService} from "../../services/csv-import.service";
import {Team} from "../../models/team";

@Component({
  selector: 'app-team-import',
  templateUrl: 'team-import.component.html',
  styleUrls: ['team-import.component.css'],
  providers: [CsvImportService]
})
export class TeamImportComponent implements OnInit {
  private error = "";
  private dropFiles: [File];
  private dropHover = false;
  private headers: [string];
  private data: [[string]];
  private newTeams: Team[] = [];

  constructor(private importService: CsvImportService) {}

  ngOnInit() {
  }

  onFilesDropped(files) {
    try {
      let file = this.importService.verifyDroppedFiles(files);
      let teams = this.importService.importTeamsFromFile(file);
    } catch (e) {
      this.error = e;
    }
  }
}
