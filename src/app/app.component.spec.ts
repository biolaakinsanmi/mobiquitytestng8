import { SeasonDetailsComponent } from "./components/season-details/season-details.component";
import { NgbModal, NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule } from "@angular/common/http";
import { StandingYearWinnerComponent } from "./components/standing-year-winner/standing-year-winner.component";
import {
  TestBed,
  async,
  fakeAsync,
  tick,
  ComponentFixture
} from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { ChampionsService } from "./services/champions.service";
import { of, throwError } from "rxjs";
import { BrowserDynamicTestingModule } from "@angular/platform-browser-dynamic/testing";
import Swal from "sweetalert2";

describe("AppComponent", () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let champService;

  //TEST getAllYearChampions() with year 2005 to 2015
  const mockYearWinners = require("../../mocks/year-winners-mock.json");
  //TEST getYearRaceWinners() with year 2008
  const mockYearRaces = require("../../mocks/year-races-mock.json");

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, NgbModalModule],
      declarations: [
        AppComponent,
        StandingYearWinnerComponent,
        SeasonDetailsComponent
      ],
      providers: [{ provide: ChampionsService, useValue: {} }, NgbModal]
    })
      .overrideModule(BrowserDynamicTestingModule, {
        set: {
          entryComponents: [SeasonDetailsComponent]
        }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;

    champService = TestBed.get(ChampionsService); // get your service
    champService.getAllYearChampions = () => {
      return { subscribe: () => {} };
    };

    champService.getYearRaceWinners = () => {
      return { subscribe: () => {} };
    };

    fixture.detectChanges();
  });

  it("should create the app", () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'mobiquitytestng8'`, () => {
    expect(app.title).toEqual("mobiquitytestng8");
  });

  it("should render title in a h1 tag", () => {
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h1").textContent).toContain(
      "World Champions!"
    );
  });

  it("should have getAllYearChampions() get Race items", fakeAsync(() => {
    spyOn(champService, "getAllYearChampions").and.returnValue(
      of(mockYearWinners)
    );

    app.getAllYearChampions();
    tick();

    expect(app.allStandingList.length).toEqual(3);
    expect(champService.getAllYearChampions).toHaveBeenCalled();
  }));

  it("should call Swal alert for error on getAllYearChampions()", fakeAsync(() => {
    spyOn(champService, "getAllYearChampions").and.returnValue(
      throwError(new Error("404"))
    );
    spyOn(Swal, "fire");

    app.getAllYearChampions();
    tick(500);

    expect(Swal.fire).toHaveBeenCalled();
    expect(champService.getAllYearChampions).toHaveBeenCalled();
  }));

  it("should have viewSeasonDetails() get Year Season items", fakeAsync(() => {
    spyOn(champService, "getYearRaceWinners").and.returnValue(
      of(mockYearRaces)
    );

    app.viewSeasonDetails({
      Driver: mockYearRaces.MRData.RaceTable.Races[0].Results[0].Driver,
      year: mockYearRaces.MRData.RaceTable.Races[0].season
    });
    tick();

    expect(app.viewedRaceList.length).toEqual(2);
    expect(champService.getYearRaceWinners).toHaveBeenCalled();
  }));

  it("should call Swal alert for error on viewSeasonDetails()", fakeAsync(() => {
    spyOn(champService, "getYearRaceWinners").and.returnValue(
      throwError(new Error("404"))
    );
    spyOn(Swal, "fire");

    app.viewSeasonDetails({
      Driver: mockYearRaces.MRData.RaceTable.Races[0].Results[0].Driver,
      year: mockYearRaces.MRData.RaceTable.Races[0].season
    });

    tick(500);

    expect(Swal.fire).toHaveBeenCalled();
    expect(champService.getYearRaceWinners).toHaveBeenCalled();
  }));
});
