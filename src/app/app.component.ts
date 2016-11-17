import {Component, OnInit, NgZone} from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {Team} from "./models/team";
import {AppStoreService} from "./services/app-store.service";
import {CsvImportService} from "./services/csv-import.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppStoreService, CsvImportService]
})
export class AppComponent implements OnInit {
  title = 'Hello JudgeAdvisor';
  // teams: Team[];
  selectedTeam: Team;

  teams: FirebaseListObservable<any>;

  constructor(private af: AngularFire) {
    this.teams = af.database.list('/teams');

    this.teams.push(new Team(1, "One", "First Org"));
    this.teams.push(new Team(2, "Two", "Second Org"));
    this.teams.push(new Team(3, "Three", "Third Org"));
  }

  ngOnInit(): void {
    // this.teams = this.af.database.list('/teams');
    // this.af.database.list('/teams').subscribe(teams => {
    //   this.zone.run(() => {
    //     console.log('update from zone', teams);
    //     this.teams = teams;
    //   });
    // });
    // let dbRef = this.af.database.list('/teams');
    // dbRef.subscribe(items => {
    //   console.log('got update', items);
    //   this.teams = items;
    // });
  }

  onSelect(team: Team): void {
    this.selectedTeam = team;
  }
}
