import { NgbActiveModal, NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { ViewSeasonEventModel } from "./../../models/view-season-event-model";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SeasonDetailsComponent } from "./season-details.component";

describe("SeasonDetailsComponent", () => {
  let component: SeasonDetailsComponent;
  let fixture: ComponentFixture<SeasonDetailsComponent>;

  const mockYearWinners = require("../../../../mocks/year-winners-mock.json");
  const mockYearRaces = require("../../../../mocks/year-races-mock.json");

  let standingList = mockYearWinners.MRData.StandingsTable.StandingsLists[0];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SeasonDetailsComponent],
      providers: [NgbActiveModal],
      imports: [NgbModalModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonDetailsComponent);
    component = fixture.componentInstance;

    component.races = mockYearRaces.MRData.RaceTable.Races;

    component.driverAndYear = new ViewSeasonEventModel();
    component.driverAndYear.year = standingList.season;
    component.driverAndYear.Driver = standingList.DriverStandings[0].Driver;

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("CloseModal() should call the Modal service close method ", () => {
    spyOn(NgbActiveModal.prototype, "close");

    component.closeModal();

    fixture.detectChanges();

    expect(NgbActiveModal.prototype.close).toHaveBeenCalled();
  });
});
