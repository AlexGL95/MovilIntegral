import { TestBed } from '@angular/core/testing';

import { GetEnemiesService } from './get-enemies.service';

describe('GetEnemiesService', () => {
  let service: GetEnemiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetEnemiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
