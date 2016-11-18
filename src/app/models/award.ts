import {AwardCategory} from "./award-category";

export class Award {
  private _script = "";
  private _winner = "";

  constructor(readonly category: string, readonly rank: number) {}

  get script(): string {
    return this._script;
  }

  set script(value: string) {
    this._script = value;
  }

  get winner(): string {
    return this._winner;
  }

  set winner(value: string) {
    this._winner = value;
  }
}
