import { TestBed } from '@angular/core/testing';

import { SecondAsingmentService } from './second-asingment.service';

describe('SecondAsingmentService', () => {
  let service: SecondAsingmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecondAsingmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
