import { TestBed } from '@angular/core/testing';

import { AnotacionApiService } from './anotacion-api.service';

describe('AnotacionApiService', () => {
  let service: AnotacionApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnotacionApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
