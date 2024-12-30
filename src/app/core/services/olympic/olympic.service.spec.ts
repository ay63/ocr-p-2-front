import {TestBed} from '@angular/core/testing';
import {OlympicService} from './olympic.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ToastrService} from "ngx-toastr";

describe('OlympicService', () => {
  let service: OlympicService;
  let toastServiceSpy: jasmine.SpyObj<ToastrService>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {provide: ToastrService, useValue: toastServiceSpy}
      ]
    });

    service = TestBed.inject(OlympicService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
