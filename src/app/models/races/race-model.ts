import { CircuitModel } from "./circuit-model";
import { ResultModel } from "./result-model";

export class RaceModel {
  constructor() {
    this.season = null;
    this.round = null;
    this.url = null;
    this.raceName = null;
    this.Circuit = new CircuitModel();
    this.date = null;
    this.time = null;
    this.Results = [];
  }

  season: number;
  round: number;
  url: string;
  raceName: string;
  Circuit: CircuitModel;
  date: string;
  time: string;
  Results: Array<ResultModel>;
}
