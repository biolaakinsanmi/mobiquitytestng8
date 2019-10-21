import { LocationModel } from "./location-model";

export class CircuitModel {
  constructor() {
    this.circuitId = null;
    this.url = null;
    this.circuitName = null;
    this.Location = new LocationModel();
  }

  circuitId: string;
  url: string;
  circuitName: string;
  Location: LocationModel;
}
