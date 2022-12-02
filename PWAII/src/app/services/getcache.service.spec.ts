import { TestBed } from '@angular/core/testing';

import { GetcacheService } from './getcache.service';

describe('GetcacheService', () => {
  let service: GetcacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetcacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
