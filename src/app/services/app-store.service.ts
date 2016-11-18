import {Injectable} from "@angular/core";
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2";
import {AppConstants} from "../models/app-constants";
import {AwardCategory} from "../models/award-category";
import {TournamentInfo} from "../models/tournament-info";
import {Team, FirebaseTeam} from "../models/team";
import {Award, FirebaseAward} from "../models/award";

import * as _ from 'lodash';

@Injectable()
export class AppStoreService {
  private _teamsObservable: FirebaseListObservable<any>;
  private _judgesObservable: FirebaseListObservable<any>;
  private _awardsObservable: FirebaseListObservable<any>;
  private _awardCategoriesObservable: FirebaseListObservable<any>;
  private _appConstantsObservable: FirebaseObjectObservable<AppConstants>;
  private _tournamentInfoObservable: FirebaseObjectObservable<TournamentInfo>;

  private _teams: Team[];
  private _awards: Award[];
  private _awardCategories: AwardCategory[];

  constructor(private af: AngularFire) {
    this._appConstantsObservable = af.database.object('/appConstants');
    this._tournamentInfoObservable = af.database.object('/tournamentInfo');

    this._teamsObservable = af.database.list('/teams');
    this._teamsObservable.subscribe(teams => this._teams = _.map(teams, t => new Team(t as FirebaseTeam)));

    this._judgesObservable = af.database.list('/judges');

    this._awardsObservable = af.database.list('/awards');
    this._awardCategoriesObservable = af.database.list('/awardCategories');

    this._awardCategoriesObservable.subscribe(cats => {
      this._awardCategories = cats;
      this._awardsObservable.subscribe(awards => {
        this._awards = _.map(awards, award => {
          let fbAward = award as FirebaseAward;
          return new Award(fbAward, this.findAwardCategoryByName(fbAward.category))
        });
      })
    });
  }

  get appConstantsObservable(): FirebaseObjectObservable<any> {
    return this._appConstantsObservable;
  }

  get teamsObservable(): FirebaseListObservable<any> {
    return this._teamsObservable;
  }

  get judgesObservable(): FirebaseListObservable<any> {
    return this._judgesObservable;
  }

  get awardCategoriesObservable(): FirebaseListObservable<any> {
    return this._awardCategoriesObservable;
  }

  get awardsObservable(): FirebaseListObservable<any> {
    return this._awardsObservable;
  }

  get tournamentInfoObservable(): FirebaseObjectObservable<TournamentInfo> {
    return this._tournamentInfoObservable;
  }

  get awardCategories(): AwardCategory[] {
    return this._awardCategories;
  }

  get awards(): Award[] {
    return this._awards;
  }

  get teams(): Team[] {
    return this._teams.slice(0);
  }

  findTeamByNumber(teamNum: number): Team {
    return _.find(this._teams, t => t.id === teamNum);
  }

  findAwardCategoryByName(name: string): AwardCategory {
    return _.find(this._awardCategories, c => c.name === name);
  }
}
