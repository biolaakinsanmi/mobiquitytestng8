import { environment } from "../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ChampionsService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Get all Year champions from 2005 till 2015
   */
  getAllYearChampions() {
    return this.httpClient.get(
      `${environment.baseApiUrl}/driverstandings/1.json?limit=11&offset=55`
    );
  }

  /**
   * Get all Year champions from 2005 till 2015
   */
  getYearRaceWinners(year: number) {
    return this.httpClient.get(
      `${environment.baseApiUrl}/${year}/results/1.json`
    );
  }
}
