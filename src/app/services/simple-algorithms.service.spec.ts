import { TestBed } from '@angular/core/testing';

import { SimpleAlgorithmsService } from './simple-algorithms.service';

describe('SimpleAlgorithmsService', () => {
  let service: SimpleAlgorithmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleAlgorithmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
