import {Component, OnInit, NgZone} from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {Team} from "./team";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hello JudgeAdvisor';
  teams: Team[];
  selectedTeam: Team;

  constructor(private af: AngularFire, private zone:NgZone) {
  }

  ngOnInit(): void {
    // this.teams = this.af.database.list('/teams');
    this.af.database.list('/teams').subscribe(teams => {
      this.zone.run(() => {
        console.log('update', teams);
        this.teams = teams;
      });
    });
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
