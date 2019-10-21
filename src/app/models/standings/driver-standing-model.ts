import { ConstructorModel } from "../constructor-model";
import { DriverModel } from "../driver-model";

export class DriverStandingModel {
  constructor() {
    this.position = null;
    this.positionText = null;
    this.points = null;
    this.wins = null;
    this.Driver = new DriverModel();
    this.Constructors = [];
  }

  position: number;
  positionText: number;
  points: number;
  wins: number;
  Driver: DriverModel;
  Constructors: Array<ConstructorModel>;
}
