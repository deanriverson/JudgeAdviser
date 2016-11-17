import {Component, OnInit, Input} from '@angular/core';
import {Judge} from "../../models/judge";

@Component({
  selector: 'judge-card',
  templateUrl: './judge-card.component.html',
  styleUrls: ['./judge-card.component.css']
})
export class JudgeCardComponent implements OnInit {
  @Input() judge: Judge;

  constructor() { }

  ngOnInit() {
  }

}
