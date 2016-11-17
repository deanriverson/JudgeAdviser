import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2";
import {AppConstants} from "../models/app-constants";

@Injectable()
export class AppStoreService {
  private _teams: FirebaseListObservable<any>;
  private _judges: FirebaseListObservable<any>;
  private _appConstants: FirebaseObjectObservable<AppConstants>;

  constructor(private af: AngularFire) {
    this._appConstants = af.database.object('/appConstants');
    this._teams = af.database.list('/teams');
    this._judges = af.database.list('/judges');
  }

  get appConstants(): FirebaseObjectObservable<any> {
    return this._appConstants;
  }

  get teams(): FirebaseListObservable<any> {
    return this._teams;
  }

  get judges(): FirebaseListObservable<any> {
    return this._judges;
  }
}
