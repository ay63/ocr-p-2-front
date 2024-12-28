import {TestBed} from '@angular/core/testing';

import {LoaderService} from './loader.service';

describe('LoaderService', () => {
  let service: LoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderService);
  });

  it('LoaderService is injected', () => {
    expect(service).toBeTruthy();
  });

  describe('test methode LoaderService', () => {
    it('loadingOn should be true', () => {
      service.loadingOn();
      service.loading$.subscribe(value => expect(value).toBeTruthy())
    });

    it('loadingOn should be false', () => {
      service.loadingOff();
      service.loading$.subscribe(value => expect(value).toBeFalsy())
    });
  })
});
