import { Component, OnInit } from '@angular/core';
import {AngularFire} from "angularfire2";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private af: AngularFire) { }

  ngOnInit() {
  }

  onLogin() {
    this.af.auth.login();
    console.log('logged in');
  }

  onLogout() {
    this.af.auth.logout();
    console.log('logged out');
  }
}
