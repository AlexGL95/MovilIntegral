import { TestBed } from '@angular/core/testing';

import { GetsecretosService } from './getsecretos.service';

describe('GetsecretosService', () => {
  let service: GetsecretosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetsecretosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
