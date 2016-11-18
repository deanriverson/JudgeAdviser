export class AwardCategory {
  constructor(
    readonly name: string,
    readonly numGiven: number,
    readonly exclusive: boolean,
    readonly order: number
  ) {}
}
