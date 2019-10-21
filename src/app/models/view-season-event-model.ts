import { DriverModel } from "./driver-model";

export class ViewSeasonEventModel {
  constructor() {
    this.year = null;
    this.Driver = new DriverModel();
  }

  year: number;
  Driver: DriverModel;
}
