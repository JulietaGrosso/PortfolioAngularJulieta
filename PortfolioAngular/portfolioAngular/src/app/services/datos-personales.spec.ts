import { TestBed } from '@angular/core/testing';

import { DatosPersonales } from './datos-personales';

describe('DatosPersonales', () => {
  let service: DatosPersonales;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosPersonales);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
