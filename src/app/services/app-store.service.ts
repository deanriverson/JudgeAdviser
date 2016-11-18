import {Injectable} from "@angular/core";
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2";
import {AppConstants} from "../models/app-constants";
import {AwardCategory} from "../models/award-category";
import {TournamentInfo} from "../models/tournament-info";

@Injectable()
export class AppStoreService {
  private _teams: FirebaseListObservable<any>;
  private _judges: FirebaseListObservable<any>;
  private _awards: FirebaseListObservable<any>;
  private _awardCategories: FirebaseListObservable<any>;
  private _appConstants: FirebaseObjectObservable<AppConstants>;
  private _tournamentInfo: FirebaseObjectObservable<TournamentInfo>;

  constructor(private af: AngularFire) {
    this._appConstants = af.database.object('/appConstants');
    this._tournamentInfo = af.database.object('/tournamentInfo');

    this._teams = af.database.list('/teams');
    this._judges = af.database.list('/judges');
    this._awards = af.database.list('/awards');
    this._awardCategories = af.database.list('/awardCategories');

    // this._awardCategories.push(new AwardCategory("Champion's Award",                  2, true, 1));
    // this._awardCategories.push(new AwardCategory("Outstanding Coach or Youth Mentor", 1, false, 2));
    // this._awardCategories.push(new AwardCategory("Outstanding Volunteer",             1, false, 3));
    // this._awardCategories.push(new AwardCategory("Robot Performance",                 2, false, 4));
    // this._awardCategories.push(new AwardCategory("Judge's Award",                     1, true, 5));
    // this._awardCategories.push(new AwardCategory("Robot Design",                      3, true, 6));
    // this._awardCategories.push(new AwardCategory("Core Values",                       3, true, 7));
    // this._awardCategories.push(new AwardCategory("Project",                           3, true, 8));

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

  get awardCategories(): FirebaseListObservable<any> {
    return this._awardCategories;
  }

  get awards(): FirebaseListObservable<any> {
    return this._awards;
  }

  get tournamentInfo(): FirebaseObjectObservable<TournamentInfo> {
    return this._tournamentInfo;
  }
}
