import {Component, OnInit} from "@angular/core";
import {AngularFire} from "angularfire2";
import {AppStoreService} from "./services/app-store.service";
import {CsvImportService} from "./services/csv-import.service";
import {ColorService} from "./services/color.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppStoreService, CsvImportService, ColorService]
})
export class AppComponent implements OnInit {
  constructor(private af: AngularFire) {
  }

  ngOnInit(): void {
  }
}
