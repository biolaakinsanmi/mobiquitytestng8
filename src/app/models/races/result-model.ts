import { AverageSpeedModel } from "./average-speed-model";
import { FastestLapModel } from "./fastest-lap-model";
import { ConstructorModel } from "./../constructor-model";
import { DriverModel } from "./../driver-model";
import { TimeModel } from "./time-model";

export class ResultModel {
  constructor() {
    this.number = null;
    this.position = null;
    this.positionText = null;
    this.points = null;
    this.Driver = new DriverModel();
    this.Constructor = new ConstructorModel();
    this.grid = null;
    this.laps = null;
    this.status = null;
    this.Time = new TimeModel();
    this.FastestLap = new FastestLapModel();
    this.AverageSpeed = new AverageSpeedModel();
  }

  number: number;
  position: number;
  positionText: number;
  points: number;
  Driver: DriverModel;
  Constructor: ConstructorModel;
  grid: number;
  laps: number;
  status: string;
  Time: TimeModel;
  FastestLap: FastestLapModel;
  AverageSpeed: AverageSpeedModel;
}
