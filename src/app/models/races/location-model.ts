export class LocationModel {
  constructor() {
    this.lat = null;
    this.long = null;
    this.locality = null;
    this.country = null;
  }

  lat: number;
  long: number;
  locality: string;
  country: string;
}
