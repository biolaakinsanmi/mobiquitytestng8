export class DriverModel {
  constructor() {
    this.driverId = null;
    this.permanentNumber = null;
    this.code = null;
    this.url = null;
    this.givenName = null;
    this.familyName = null;
    this.dateOfBirth = null;
    this.nationality = null;
  }

  driverId: string;
  permanentNumber: number;
  code: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
}
