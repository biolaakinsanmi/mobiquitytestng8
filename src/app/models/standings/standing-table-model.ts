import { StandingListModel } from "./standing-list-model";

export class StandingTableModel {
  constructor() {
    this.driverStandings = null;
    this.StandingsLists = [];
  }

  driverStandings: number;
  StandingsLists: Array<StandingListModel>;
}
