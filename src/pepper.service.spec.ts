import { TestBed, inject } from '@angular/core/testing';

import { PepperService } from './pepper.service';

describe('PepperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PepperService]
    });
  });

  it('should be created', inject([PepperService], (service: PepperService) => {
    expect(service).toBeTruthy();
  }));
});
