import { DriverStandingModel } from "./driver-standing-model";

export class StandingListModel {
  constructor() {
    this.season = null;
    this.round = null;
    this.DriverStandings = [];
  }

  season: number;
  round: number;
  DriverStandings: Array<DriverStandingModel>;
}
