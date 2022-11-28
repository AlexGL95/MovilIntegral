import { TestBed } from '@angular/core/testing';

import { GetHeroService } from './get-hero.service';

describe('GetHeroService', () => {
  let service: GetHeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetHeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
