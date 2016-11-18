import * as Color from "color";
import * as _ from "lodash";

export interface TeamScores {
  rank: number;
  max: number;
  scores: number[];
}

export interface TeamNominations {
  robot: number;
  project: number;
  coreValues: number;
}

export interface FirebaseTeam {
  $key: string;

  id: number;
  name: string;
  color: string;
  organization: string;

  scores?: TeamScores;
  nominations?: TeamNominations;
}

export class Team {
  private static readonly DEFAULT_SCORES: TeamScores = {rank: 1, max: 0, scores: [0, 0, 0]};
  private static readonly DEFAULT_NOMINATIONS: TeamNominations = {robot: 11, project: 11, coreValues: 11};

  readonly backgroundColor: string;

  constructor(private fbTeam:FirebaseTeam) {
    fbTeam.scores = fbTeam.scores || Team.DEFAULT_SCORES;
    fbTeam.nominations = fbTeam.nominations || Team.DEFAULT_NOMINATIONS;
    this.backgroundColor = Color(this.color).alpha(.1).rgbaString();
  }

  get id(): number {
    return this.fbTeam.id;
  }

  get name(): string {
    return this.fbTeam.name;
  }

  get color(): string {
    return this.fbTeam.color;
  }

  get organization(): string {
    return this.fbTeam.organization;
  }

  get performanceRank(): number {
    return this.fbTeam.scores.rank;
  }

  set performanceRank(rank: number) {
    this.fbTeam.scores.rank = rank;
  }

  get maxScore(): number {
    return this.fbTeam.scores.max;
  }

  get roundScores(): number[] {
    return this.fbTeam.scores.scores;
  }

  setRoundScores(newScores: number[]) {
    let scores = this.fbTeam.scores;
    scores.scores = newScores.slice(0);
    scores.max = _.max(scores.scores);
  }

  get robotNomination(): number {
    return this.fbTeam.nominations.robot;
  }

  get projectNomination(): number {
    return this.fbTeam.nominations.project;
  }

  get coreValuesNomination(): number {
    return this.fbTeam.nominations.coreValues;
  }

  get judgingScore(): number {
    let noms = this.fbTeam.nominations;
    return noms.robot ** 2 + noms.project ** 2 + noms.coreValues ** 2;
  }

  toFirebase(): FirebaseTeam {
    return this.fbTeam;
  }

  static clone(t: Team) {
    let fbClone = _.cloneDeep(t.toFirebase());
    return new Team(fbClone);
  }
}
