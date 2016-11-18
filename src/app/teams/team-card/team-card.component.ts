import {Component, OnInit, Input} from '@angular/core';
import {Team} from "../../models/team";
import * as Color from "color";

@Component({
  selector: 'team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.css']
})
export class TeamCardComponent implements OnInit {
  @Input() team: Team;
  private backgroundColor = "#fff";

  constructor() { }

  ngOnInit() {
    this.backgroundColor = Color(this.team.color).alpha(.1).rgbaString();
  }
}
