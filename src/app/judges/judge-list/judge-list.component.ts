import {Component, OnInit} from '@angular/core';
import {FirebaseListObservable} from "angularfire2";
import {AppStoreService} from "../../services/app-store.service";
import {Judge} from "../../models/judge";
import * as _ from 'lodash';

@Component({
  selector: 'app-judge-list',
  templateUrl: './judge-list.component.html',
  styleUrls: ['./judge-list.component.css'],
  providers: [AppStoreService]
})
export class JudgeListComponent implements OnInit {
  private judges: Judge[];
  private coreJudges: Judge[];
  private robotJudges: Judge[];
  private projectJudges: Judge[];

  constructor(private store: AppStoreService) {
    store.judges.subscribe(judges => {
      this.judges = judges;
      this.robotJudges = _.filter(this.judges, j => j.role.indexOf('Robot') >= 0).sort(this._compareFn);
      this.projectJudges = _.filter(this.judges, j => j.role.indexOf('Project') >= 0).sort(this._compareFn);
      this.coreJudges = _.filter(this.judges, j => j.role.indexOf('Core') >= 0).sort(this._compareFn);
    });
  }

  ngOnInit() {
  }

  private _compareFn = (a, b) => {
    if (a.role.indexOf('Head') === 0) return -1;
    if (b.role.indexOf('Head') === 0) return 1;
    if (a.lastName < b.lastName) return -1;
    if (a.lastName > b.lastName) return 1;
    return 0;
  };
}
