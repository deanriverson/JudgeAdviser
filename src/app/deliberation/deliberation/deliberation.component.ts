import { Component, OnInit } from '@angular/core';
import {AppStoreService} from "../../services/app-store.service";
import {Award} from "../../models/award";

@Component({
  selector: 'app-deliberation',
  templateUrl: './deliberation.component.html',
  styleUrls: ['./deliberation.component.css']
})
export class DeliberationComponent implements OnInit {
  private awards: Award[];

  constructor(private store:AppStoreService) {
    store.awardsObservable.subscribe(awards => {
      // this.awardsObservable = awardsObservable.map(Award.fromFirebase);
    });
  }

  ngOnInit() {
  }

}
