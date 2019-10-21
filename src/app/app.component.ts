import { ViewSeasonEventModel } from "./models/view-season-event-model";
import { SeasonDetailsComponent } from "./components/season-details/season-details.component";
import { ChampionsService } from "./services/champions.service";
import { StandingListModel } from "./models/standings/standing-list-model";
import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { RaceModel } from "./models/races/race-model";
import Swal from "sweetalert2";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "mobiquitytestng8";

  isLoading: boolean = false;
  hadFetchError: boolean = false;

  allStandingList: Array<StandingListModel>;

  viewedRaceList: Array<RaceModel> = [];

  constructor(
    private champService: ChampionsService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.getAllYearChampions();
  }

  /**Get Champions list (2005 - 2015) */
  getAllYearChampions() {
    //show loader
    this.isLoading = true;

    this.champService.getAllYearChampions().subscribe(
      (response: any) => {
        //close loader
        this.isLoading = false;

        this.allStandingList = response.MRData.StandingsTable.StandingsLists;
      },
      (error: any) => {
        //close loader
        this.isLoading = false;
        this.hadFetchError = true;

        console.log(error);

        Swal.fire(
          "Sorry",
          "Can not fetch Year Champions from 2005 to 2015",
          "error"
        );
      }
    );
  }

  /**
   *
   * @param driverAndYearObj Object of year and driver details
   */
  viewSeasonDetails(driverAndYearObj: ViewSeasonEventModel) {
    this.viewedRaceList = [];

    //open loader
    this.isLoading = true;

    this.champService.getYearRaceWinners(driverAndYearObj.year).subscribe(
      (response: any) => {
        //close loader
        this.isLoading = false;
        this.viewedRaceList = response.MRData.RaceTable.Races;

        const modalRef = this.modalService.open(SeasonDetailsComponent);
        modalRef.componentInstance.driverAndYear = driverAndYearObj;
        modalRef.componentInstance.races = this.viewedRaceList;
      },
      (error: any) => {
        //close loader
        this.isLoading = false;

        console.log(error);

        Swal.fire(
          "Sorry",
          `Can not fetch List of Winners for year ${driverAndYearObj.year}`,
          "error"
        );
      }
    );
  }
}
