import { AverageSpeedModel } from "./average-speed-model";
import { TimeModel } from "./time-model";

export class FastestLapModel {
  constructor() {
    this.rank = null;
    this.lap = null;
    this.Time = new TimeModel();
    this.AverageSpeed = new AverageSpeedModel();
  }

  rank: number;
  lap: number;
  Time: TimeModel;
  AverageSpeed: AverageSpeedModel;
}
