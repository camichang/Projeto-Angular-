import { TestBed } from '@angular/core/testing';

import { CalculadoraCientificaService } from './calculadora-cientifica.service';

describe('CalculadoraCientificaService', () => {
  let service: CalculadoraCientificaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraCientificaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
