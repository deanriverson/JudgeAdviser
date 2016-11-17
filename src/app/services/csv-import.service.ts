import {Injectable, Inject} from '@angular/core';
import {AppStoreService} from "./app-store.service";
import {Team} from "../models/team";
import * as Papa from 'papaparse';

@Injectable()
export class CsvImportService {
  private appConstants;

  constructor(store:AppStoreService) {
    store.appConstants.subscribe(obj => this.appConstants = obj);
  }

  verifyDroppedFiles(dropFiles: FileList): File {
    if (dropFiles.length == 0 || dropFiles.length > 1) {
      throw "Please drop only one file at a time.";
    }

    if (dropFiles[0].type !== "text/csv") {
      throw "Please drop a .csv file only. If that was a CSV file, give it the .csv extension."
    }

    return dropFiles[0];
  }

  importTeamsFromFile(file:File): Team[] {
    return [];
  }

}
