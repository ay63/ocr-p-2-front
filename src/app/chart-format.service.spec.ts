import { TestBed } from '@angular/core/testing';

import { ChartFormatService } from './chart-format.service';

describe('ChartFormatService', () => {
  let service: ChartFormatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartFormatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
