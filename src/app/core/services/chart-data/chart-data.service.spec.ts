import {TestBed} from '@angular/core/testing';
import {Olympic} from "../../models/interfaces/Olympic";
import {OlympicService} from "../olympic/olympic.service";
import {ToastrService} from "ngx-toastr";
import {of, throwError} from "rxjs";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ChartDataService} from "./chart-data.service";
import olympicsMockData from "../../../../test/mockData/olympicsDataMock";


describe('ChartData service', () => {
  let service: ChartDataService;
  let olympicServiceSpy: jasmine.SpyObj<OlympicService>;
  let toastServiceSpy: jasmine.SpyObj<ToastrService>;

  beforeEach(() => {
    const olympicServiceMock = jasmine.createSpyObj('OlympicService', ['getOlympics']);
    const toastServiceMock = jasmine.createSpyObj('ToastrService', ['error']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ChartDataService,
        {provide: OlympicService, useValue: olympicServiceMock},
        {provide: ToastrService, useValue: toastServiceMock}
      ]
    });

    service = TestBed.inject(ChartDataService);
    olympicServiceSpy = TestBed.inject(OlympicService) as jasmine.SpyObj<OlympicService>;
    toastServiceSpy = TestBed.inject(ToastrService) as jasmine.SpyObj<ToastrService>;
  });

  describe('CountryDataService service ', () => {
    it('CountryDataService should be created', () => {
      expect(service).toBeTruthy();
    });
  })

  describe('getTotalJos', () => {
    it('should return the total number of participations', () => {
      const olympics: Olympic[] = [{
        id: 1,
        country: 'Country 1',
        participations: [{id: 1, year: 2000, city: 'paris', medalsCount: 2, athleteCount: 3}]
      }];
      olympicServiceSpy.getOlympics.and.returnValue(of(olympics));

      service.getTotalJos().subscribe(result => {
        expect(result).toBe(1);
      });
    });

    it('should return 0 if olympics is null', () => {
      olympicServiceSpy.getOlympics.and.returnValue(of(null));
      service.getTotalJos().subscribe(result => {
        expect(result).toBe(0);
      });
    });

    it('should handle errors and show an error message', () => {
      const errorMessage = 'An error occurred';
      olympicServiceSpy.getOlympics.and.returnValue(throwError(errorMessage));

      service.getTotalJos().subscribe();
      expect(toastServiceSpy.error).toHaveBeenCalledWith(errorMessage);
    });
  });

  describe('getTotalCountry', () => {
    it('should return 0 if olympics is null', () => {
      olympicServiceSpy.getOlympics.and.returnValue(of(null));

      service.getTotalCountry().subscribe(result => {
        expect(result).toBe(0);
      });
    });

    it('should handle errors and show an error message', () => {
      const errorMessage = 'An error occurred';
      olympicServiceSpy.getOlympics.and.returnValue(throwError(errorMessage));
      service.getTotalCountry().subscribe();
      expect(toastServiceSpy.error).toHaveBeenCalledWith(errorMessage);
    });

    it('should return data', () => {
      olympicServiceSpy.getOlympics.and.returnValue(of(olympicsMockData));
      service.getTotalCountry().subscribe(result => {
        expect(result).toBe(2);
      });
    })
  });
})
