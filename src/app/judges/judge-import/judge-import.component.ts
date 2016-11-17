import {Component, OnInit} from '@angular/core';
import {AppStoreService} from "../../services/app-store.service";
import {FirebaseListObservable, FirebaseObjectObservable} from "angularfire2";
import {Judge} from "../../models/judge";
import {AppConstants} from "../../models/app-constants";

import * as _ from 'lodash';
import * as Papa from 'papaparse';

@Component({
  selector: 'judge-import',
  templateUrl: './judge-import.component.html',
  styleUrls: ['./judge-import.component.css'],
  providers: [AppStoreService]
})
export class JudgeImportComponent implements OnInit {
  private JUDGE_HEADERS: {colIndex: number, colName: string, processFunc?: (data: string)=> string}[] = [];

  private appConstants: AppConstants;
  private currentJudges: FirebaseListObservable<any>;
  private newJudges: Judge[] = [];
  private dropHover = false;
  private error = "";

  constructor(private store: AppStoreService) {
    store.appConstants.subscribe(snapshot => {
      this.appConstants = snapshot;
      this.createJudgeHeaderArray();
    });
    this.currentJudges = store.judges;
  }

  ngOnInit() {
  }

  onSubmit() {
    this.currentJudges.remove();
    _.each(this.newJudges, (j) => this.currentJudges.push(j));
    this.newJudges = [];
  }

  onCancel() {
    this.newJudges = [];
  }

  onFilesDropped(files) {
    // let result = Papa.parse("one, two, three, four");
    this.error = this.verifyDroppedFiles(files);
    if (this.error) {
      return;
    }

    Papa.parse(files[0], {
      complete: (results => this.createJudgesFromData(results))
    });
  }

  private createJudgesFromData(results: any) {
    this.error = this.checkHeaders(results.data[0]);
    if (this.error) {
      return;
    }

    let extractRowData = (row, colIndex) => {
      return _.find(this.JUDGE_HEADERS, (h) => h.colIndex === colIndex).processFunc(row[colIndex]);
    };

    let judgeMapper = row => new Judge(
      extractRowData(row, this.appConstants.judgeImportColumnFirstName),
      extractRowData(row, this.appConstants.judgeImportColumnLastName),
      extractRowData(row, this.appConstants.judgeImportColumnEmail),
      extractRowData(row, this.appConstants.judgeImportColumnPhone),
      extractRowData(row, this.appConstants.judgeImportColumnRole),
      extractRowData(row, this.appConstants.judgeImportColumnYears),
      extractRowData(row, this.appConstants.judgeImportColumnTeamAffiliation)
    );

    let judgeData:(string[])[] = results.data.slice(1);
    this.newJudges = _.map(judgeData, judgeMapper);
  }

  private verifyDroppedFiles(dropFiles: FileList): string {
    if (dropFiles.length == 0 || dropFiles.length > 1) {
      return "Please drop only one file at a time.";
    }

    if (dropFiles[0].type !== "text/csv") {
      return "Please drop a .csv file only. If that was a CSV file, give it the .csv extension."
    }

    return null;
  }

  private checkHeaders(headers): string {
    for (let h of this.JUDGE_HEADERS) {
      if (headers[h.colIndex] !== h.colName) {
        return this.formatHeaderErrorMsg(h.colName, h.colIndex);
      }
    }

    return null;
  }

  private formatHeaderErrorMsg(fieldName: string, columnIndex: number): string {
    return `The "${fieldName}" column should be at index ${columnIndex}`;
  }

  private createJudgeHeaderArray() {
    let splitRole: (d:string)=>string = d => d.split(',')[0];

    this.JUDGE_HEADERS = [
      {
        colIndex: this.appConstants.judgeImportColumnFirstName,
        colName: "First Name",
        processFunc: _.identity
      },
      {
        colIndex: this.appConstants.judgeImportColumnLastName,
        colName: "Last Name",
        processFunc: _.identity
      },
      {
        colIndex: this.appConstants.judgeImportColumnEmail,
        colName: "Email",
        processFunc: _.identity
      },
      {
        colIndex: this.appConstants.judgeImportColumnPhone,
        colName: "Phone",
        processFunc: _.identity
      },
      {
        colIndex: this.appConstants.judgeImportColumnRole,
        colName: "Roles",
        processFunc: splitRole
      },
      {
        colIndex: this.appConstants.judgeImportColumnYears,
        colName: "Years of Service",
        processFunc: _.identity
      },
      {
        colIndex: this.appConstants.judgeImportColumnTeamAffiliation,
        colName: "Team Affiliation",
        processFunc: _.identity
      }
    ];
  }
}
