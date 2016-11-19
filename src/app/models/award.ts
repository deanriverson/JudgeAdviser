import {AwardCategory} from "./award-category";
export interface FirebaseAward {
  $key: string;

  category: string,
  rank: number,
  winner: string,
  script: string
}

export class Award {
  private static readonly ORDINALS = [
    "Zero", "First", "Second", "Third", "Fourth", "Fifth",
    "Sixth", "Seventh", "Eighth", "Ninth", "Tenth"
  ];

  constructor(private fbAward: FirebaseAward, private category: AwardCategory) {}

  get categoryName(): string {
    return this.category.name;
  }

  get rank(): number {
    return this.fbAward.rank;
  }

  get script(): string {
    return this.fbAward.script;
  }

  set script(value: string) {
    this.fbAward.script = value;
  }

  get winner(): string {
    return this.fbAward.winner;
  }

  set winner(value: string) {
    this.fbAward.winner = value;
  }

  get ordinal(): string {
    return Award.ORDINALS[this.rank];
  }

  get awardCategory(): AwardCategory {
    return this.category;
  }

  get description(): string {
    let desc = this.categoryName;
    if (this.category.numGiven > 1) {
      desc += ` - ${this.ordinal} Place`;
    }
    return desc;
  }

  toFirebase():FirebaseAward {
    return this.fbAward;
  }
}
