import { TestBed } from '@angular/core/testing';

import { ConsultoriosService } from './consultorios.service';

describe('ConsultoriosService', () => {
  let service: ConsultoriosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultoriosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
