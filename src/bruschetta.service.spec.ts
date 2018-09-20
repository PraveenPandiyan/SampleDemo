import { TestBed, inject } from '@angular/core/testing';

import { BruschettaService } from './bruschetta.service';

describe('BruschettaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BruschettaService]
    });
  });

  it('should be created', inject([BruschettaService], (service: BruschettaService) => {
    expect(service).toBeTruthy();
  }));
});
