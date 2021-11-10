import { TestBed } from '@angular/core/testing';

import { HttpClientCallService } from './http-client-call.service';

describe('HttpClientCallService', () => {
  let service: HttpClientCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpClientCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
