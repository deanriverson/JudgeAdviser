import {Component, OnInit, Input} from '@angular/core';
import {Team} from "../team";

@Component({
  selector: 'ja-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {
  @Input()
  team: Team;

  constructor() { }

  ngOnInit() {
  }

}
