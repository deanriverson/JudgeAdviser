import { Component, OnInit } from '@angular/core';
import * as Papa from 'papaparse';

@Component({
  selector: 'app-team-import',
  templateUrl: 'team-import.component.html',
  styleUrls: ['team-import.component.css']
})
export class TeamImportComponent implements OnInit {
  private dropFiles: [File];
  private dropHover = false;
  private headers: [string];
  private data: [[string]];

  constructor() {}

  ngOnInit() {
  }

  handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    this.dropHover = true;
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
  }

  handleDragLeave() {
    this.dropHover = false;
  }

  handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    this.dropHover = false;
    this.dropFiles = evt.dataTransfer.files; // FileList object.

    // let result = Papa.parse("one, two, three, four");
    Papa.parse(this.dropFiles[0], {
      complete: (results => this.parserResults(results))
    });
  }

  parserResults(results:any) {
    this.headers = results.data[0];
    this.data = results.data.slice(1);
    console.log('parse result', results);
  }
}
