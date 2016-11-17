import {Component, OnInit, Input} from '@angular/core';
import {Team} from "../../models/team";

@Component({
  selector: 'team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.css']
})
export class TeamCardComponent implements OnInit {
  @Input() team: Team;

  constructor() { }

  ngOnInit() {
  }
}
