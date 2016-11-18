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
    store.awards.subscribe(awards => {
      this.awards = awards.map(Award.fromFirebase);
    });
  }

  ngOnInit() {
  }

}
