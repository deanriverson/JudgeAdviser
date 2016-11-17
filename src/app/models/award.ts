import {Team} from "./team";
import {AwardCategory} from "./award-category";

export class Award {
  private _script = "";
  private _winner: Team;

  constructor(readonly category: AwardCategory, readonly rank: number) {}
}
