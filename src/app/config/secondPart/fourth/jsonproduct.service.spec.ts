import { TestBed } from '@angular/core/testing';

import { JsonproductService } from './jsonproduct.service';

describe('JsonproductService', () => {
  let service: JsonproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
