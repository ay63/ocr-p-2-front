import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ChartFormatDataService} from "./chart-format-data.service";
import {OlympicService} from "../olympic/olympic.service";
import {OlympicsServiceMock} from "../../../../test/OlympicsServiceMock";
import {ToastrService} from "ngx-toastr";

describe('ChartFormatService', () => {

  let service: ChartFormatDataService;
  const toastServiceMock = jasmine.createSpyObj('ToastrService', ['error']);
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {provide: OlympicService, useClass: OlympicsServiceMock},
        {provide: ToastrService, useValue: toastServiceMock}
      ]
    });

    service = TestBed.inject(ChartFormatDataService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
