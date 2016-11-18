export interface FirebaseAward {
  category: string,
  rank: number,
  winner: string,
  script: string
}

export class Award implements FirebaseAward {
  private static readonly ORDINALS = [
    "Zero", "First", "Second", "Third", "Fourth", "Fifth",
    "Sixth", "Seventh", "Eighth", "Ninth", "Tenth"
  ];

  static fromFirebase(obj:FirebaseAward): Award {
    let a = new Award(obj.category, obj.rank)
    a.script = obj.script;
    a.winner = obj.winner;
    return a;
  }

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

  get ordinal(): string {
    return Award.ORDINALS[this.rank];
  }

  toFirebase():FirebaseAward {
    return {category: this.category, rank: this.rank, script: this.script, winner: this.winner};
  }
}
