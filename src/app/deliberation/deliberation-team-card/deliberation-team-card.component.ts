import {Component, OnInit, Input} from '@angular/core';
import {Team} from "../../models/team";

@Component({
  selector: 'deliberation-team-card',
  templateUrl: './deliberation-team-card.component.html',
  styleUrls: ['./deliberation-team-card.component.css']
})
export class DeliberationTeamCardComponent implements OnInit {
  @Input() team: Team;
  @Input() rank: number;
  @Input() cardType: string;

  constructor() { }

  ngOnInit() {
  }
}
