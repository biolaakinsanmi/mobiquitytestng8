import { TestBed, getTestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";

import { ChampionsService } from "./champions.service";

describe("ChampionsService", () => {
  let injector: TestBed;
  let service: ChampionsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ChampionsService]
    });

    injector = getTestBed();
    service = injector.get(ChampionsService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  //Mock http response
  const mockYearWinners = require("../../../mocks/year-winners-mock.json");

  it("should be created", () => {
    const service: ChampionsService = TestBed.get(ChampionsService);
    expect(service).toBeTruthy();
  });

  //test getUserList()
  it("getUserList() should return data", () => {
    service.getAllYearChampions().subscribe(res => {
      expect(res).toEqual(mockYearWinners);
    });

    const req = httpMock.expectOne(
      "http://ergast.com/api/f1/driverstandings/1.json?limit=11&offset=55"
    );
    expect(req.request.method).toBe("GET");
    req.flush(mockYearWinners);
  });

  //TEST getYearRaceWinners() with year 2008
  const mockYearRaces = require("../../../mocks/year-races-mock.json");

  it("getYearRaceWinners() should return data", () => {
    service.getYearRaceWinners(2008).subscribe(res => {
      expect(res).toEqual(mockYearRaces);
    });

    const req = httpMock.expectOne(
      "http://ergast.com/api/f1/2008/results/1.json"
    );
    expect(req.request.method).toBe("GET");
    req.flush(mockYearRaces);
  });
});
