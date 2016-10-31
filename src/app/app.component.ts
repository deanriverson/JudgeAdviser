import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello JudgeAdvisor';
  // teams: FirebaseListObservable<any[]>;
  teams: any[];

  constructor(af: AngularFire) {
    let dbRef = af.database.list('/teams');
    dbRef.subscribe(items => {
      console.log('got update', items);
      this.teams = items;
    });
  }
}
