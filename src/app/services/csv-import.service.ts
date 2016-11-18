///<reference path="../models/team.ts"/>
import {Injectable} from "@angular/core";
import {AppStoreService} from "./app-store.service";
import {Team} from "../models/team";
import * as Papa from "papaparse";
import * as _ from "lodash";
import {ColorService} from "./color.service";

@Injectable()
export class CsvImportService {
  private static readonly EXPECTED_VERSION = '1';
  private static readonly EXPECTED_VERSION_STR = 'Version Number';
  private static readonly EXPECTED_BLOCK_FORMAT_STR = 'Block Format';
  private static readonly EXPECTED_TEAM_BLOCK_NUM = '1';

  private appConstants;

  constructor(store:AppStoreService, private colorService:ColorService) {
    store.appConstantsObservable.subscribe(obj => this.appConstants = obj);
  }

  verifyDroppedFiles(dropFiles: FileList): Promise<File> {
    return new Promise((resolve, reject) => {
      if (dropFiles.length == 0 || dropFiles.length > 1) {
        reject("Please drop only one file at a time.");
      }

      if (dropFiles[0].type !== "text/csv") {
        reject("Please drop a .csv file only. If that was a CSV file, give it the .csv extension.");
      }

      resolve(dropFiles[0]);
    });
  }

  importTeamsFromFile(file:File): Promise<Team[]> {
    return new Promise((resolve, reject) => {
      Papa.parse(file, {
        complete: (results => this.processTeamResults(results, resolve, reject))
      });
      return [];
    });
  }

  private processTeamResults(results, resolve, reject) {
    if (results.errors.length > 0) {
      reject(this.buildErrorStrings(results.errors));
    }

    try {
      let teamCount = this.readHeaderSection(results.data, CsvImportService.EXPECTED_TEAM_BLOCK_NUM);
      let teams = this.createTeamsFromRows(results.data.slice(3), teamCount);
      resolve(teams);
    } catch (e) {
      reject(e);
    }
  }

  private createTeamsFromRows(rows: string[][], teamCount): Team[] {
    if (rows.length < teamCount) {
      console.log(`Warning: team count should be ${teamCount} but there are only ${rows.length} rows left in file`);
    }

    return _(rows)
      .map(row => (row.length < 2 || !row[0] || !row[1]) ? null :
        new Team(Number(row[0]), row[1], this.colorService.randomColor()))
      .compact()
      .value();
  }

  private buildErrorStrings(errors: PapaParse.ParseError[]): string {
    let rowFormatter = row => row !== undefined ? 'row '+row : 'undefined row';
    let msgFormatter = (msg, e) => msg + `${e.code}: ${e.message} at ${rowFormatter(e.row)}. `;
    return errors.reduce(msgFormatter, '');
  }

  private readHeaderSection(rows: string[][], blockNum: string): number {
    let versionRow = rows[0];
    if (versionRow[0] !== CsvImportService.EXPECTED_VERSION_STR) {
      throw `Unexpected version string "${versionRow[0]}" in first line of header`;
    }
    if (versionRow[1] !== CsvImportService.EXPECTED_VERSION) {
      throw `Unexpected version number: expected "${CsvImportService.EXPECTED_VERSION}" but found "${versionRow[1]}"`;
    }

    let blockFormatRow = rows[1];
    if (blockFormatRow[0] !== CsvImportService.EXPECTED_BLOCK_FORMAT_STR) {
      throw `Unexpected block format string "${blockFormatRow[0]}" in second line line of header`;
    }
    if (blockFormatRow[1] !== blockNum) {
      throw `Unexpected block number: expected "${blockNum}" but found "${blockFormatRow[1]}"`;
    }

    return Number(rows[2][1]);
  }
}
