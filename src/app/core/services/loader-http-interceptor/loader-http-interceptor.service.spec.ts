import { TestBed } from '@angular/core/testing';

import { LoaderHttpInterceptorService } from './loader-http-interceptor.service';

describe('LoaderHttpInterceptorService', () => {
  let service: LoaderHttpInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderHttpInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
