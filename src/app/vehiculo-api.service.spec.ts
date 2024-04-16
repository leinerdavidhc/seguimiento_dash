import { TestBed } from '@angular/core/testing';

import { VehiculoApiService } from './vehiculo-api.service';

describe('VehiculoApiService', () => {
  let service: VehiculoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehiculoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
