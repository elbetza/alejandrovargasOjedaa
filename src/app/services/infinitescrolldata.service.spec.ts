import { TestBed } from '@angular/core/testing';

import { InfinitescrolldataService } from './infinitescrolldata.service';

describe('InfinitescrolldataService', () => {
  let service: InfinitescrolldataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfinitescrolldataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
