import { ViewSeasonEventModel } from "./../../models/view-season-event-model";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { StandingYearWinnerComponent } from "./standing-year-winner.component";

describe("StandingListStandingYearWinnerComponent", () => {
  let component: StandingYearWinnerComponent;
  let fixture: ComponentFixture<StandingYearWinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StandingYearWinnerComponent]
    }).compileComponents();
  }));

  const mockYearWinners = require("../../../../mocks/year-winners-mock.json");

  beforeEach(() => {
    fixture = TestBed.createComponent(StandingYearWinnerComponent);
    component = fixture.componentInstance;
    component.standingList =
      mockYearWinners.MRData.StandingsTable.StandingsLists[0];
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render 1 winner name in the component", () => {
    component.ngOnInit();
    fixture.detectChanges();

    let tableRows = fixture.nativeElement.querySelectorAll(
      ".card .card-body h4"
    );

    expect(tableRows.length).toBe(1);
  });

  it("should emmit event on card click", () => {
    component.onClickSeason();
    spyOn(component.viewSeasonEvent, "emit");

    const nativeElement = fixture.nativeElement;
    const card = nativeElement.querySelector(".winner-card");
    card.dispatchEvent(new Event("click"));

    fixture.detectChanges();

    let ev: ViewSeasonEventModel = new ViewSeasonEventModel();
    ev.year = component.standingList.season;
    ev.Driver = component.standingList.DriverStandings[0].Driver;

    expect(component.viewSeasonEvent.emit).toHaveBeenCalledWith(ev);
  });
});
