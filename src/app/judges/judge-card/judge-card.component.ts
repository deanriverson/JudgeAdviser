import {Component, OnInit, Input} from '@angular/core';
import {Judge} from "../../models/judge";

@Component({
  selector: 'judge-card',
  templateUrl: './judge-card.component.html',
  styleUrls: ['./judge-card.component.css']
})
export class JudgeCardComponent implements OnInit {
  @Input() judge: Judge;

  private icon: string;
  private iconColor: string;
  private background: string;

  ngOnInit() {
    this.icon = '/assets/';
    this.iconColor = 'black';

    if (this.judge.role.startsWith('Head')) {
      this.icon += 'crown.svg';
      this.iconColor = 'goldenrod';
    } else if (this.judge.years === '0') {
      this.icon += 'rook.svg';
      this.iconColor = 'darkgoldenrod';
    } else {
      this.icon += 'person.svg';
    }

    if (this.judge.role.indexOf('Robot') >= 0) {
      this.background = '#ffcccc';
    } else if (this.judge.role.indexOf('Project') >= 0) {
      this.background = '#ccffcc';
    } else if (this.judge.role.indexOf('Core') >= 0) {
      this.background = '#ddeeff';
    } else {
      this.background = "white";
    }
  }

}
