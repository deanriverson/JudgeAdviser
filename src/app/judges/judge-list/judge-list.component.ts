import { Component, OnInit } from '@angular/core';
import {FirebaseListObservable} from "angularfire2";
import {AppStoreService} from "../../services/app-store.service";

@Component({
  selector: 'app-judge-list',
  templateUrl: './judge-list.component.html',
  styleUrls: ['./judge-list.component.css'],
  providers: [AppStoreService]
})
export class JudgeListComponent implements OnInit {
  judges: FirebaseListObservable<any>;

  constructor(private store: AppStoreService) {
    this.judges = store.judges;
  }

  ngOnInit() {
  }
}
