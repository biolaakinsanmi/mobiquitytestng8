import { RaceModel } from "./../../models/races/race-model";
import { ViewSeasonEventModel } from "./../../models/view-season-event-model";
import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-season-details",
  templateUrl: "./season-details.component.html",
  styleUrls: ["./season-details.component.scss"]
})
export class SeasonDetailsComponent implements OnInit {
  @Input() driverAndYear: ViewSeasonEventModel;

  @Input() races: Array<RaceModel>;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {}

  /**
   * Close Modal
   */
  closeModal() {
    this.activeModal.close();
  }
}
