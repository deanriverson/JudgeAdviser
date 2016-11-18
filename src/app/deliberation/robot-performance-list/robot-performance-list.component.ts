import { Component, OnInit } from '@angular/core';
import {Team} from "../../models/team";
import {AppStoreService} from "../../services/app-store.service";

@Component({
  selector: 'robot-performance-list',
  templateUrl: './robot-performance-list.component.html',
  styleUrls: ['./robot-performance-list.component.css']
})
export class RobotPerformanceListComponent implements OnInit {
  private teams: Team[];

  constructor(store:AppStoreService) {
    store.teamsObservable.subscribe(teams => this.teams = teams);
  }

    ngOnInit() {
  }
}
