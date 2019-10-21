import { ViewSeasonEventModel } from "../../models/view-season-event-model";
import { StandingListModel } from "../../models/standings/standing-list-model";
import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-standing-year-winner",
  templateUrl: "./standing-year-winner.component.html",
  styleUrls: ["./standing-year-winner.component.scss"]
})
export class StandingYearWinnerComponent implements OnInit {
  @Input() standingList: StandingListModel = new StandingListModel();

  @Output() viewSeasonEvent: EventEmitter< ViewSeasonEventModel > = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  /**
   * Emmit event when card is clicked
   */
  onClickSeason() {
    let clickEvent: ViewSeasonEventModel = new ViewSeasonEventModel();

    clickEvent.year = this.standingList.season;
    clickEvent.Driver = this.standingList.DriverStandings[0].Driver;

    this.viewSeasonEvent.emit(clickEvent);
  }
}
