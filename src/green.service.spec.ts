import { TestBed, inject } from '@angular/core/testing';

import { GreenService } from './green.service';

describe('GreenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GreenService]
    });
  });

  it('should be created', inject([GreenService], (service: GreenService) => {
    expect(service).toBeTruthy();
  }));
});
