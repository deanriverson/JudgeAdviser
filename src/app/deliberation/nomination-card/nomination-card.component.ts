import {Component, OnInit, Input} from '@angular/core';
import {Team} from "../../models/team";

@Component({
  selector: 'nomination-card',
  templateUrl: './nomination-card.component.html',
  styleUrls: ['./nomination-card.component.css']
})
export class NominationCardComponent implements OnInit {
  @Input() team: Team;
  @Input() rank: number;
  @Input() category: string = 'robot';

  private backgroundColor: string;

  constructor() { }

  ngOnInit() {
    switch(this.category) {
      case 'robot':
        this.backgroundColor = '#FFDDDD';
        return;
      case 'project':
        this.backgroundColor = '#DDFFDD';
        return;
      default:
        this.backgroundColor = '#BBDDFF';
    }
  }
}
