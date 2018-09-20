import { TestBed, inject } from '@angular/core/testing';

import { CherryService } from './cherry.service';

describe('CherryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CherryService]
    });
  });

  it('should be created', inject([CherryService], (service: CherryService) => {
    expect(service).toBeTruthy();
  }));
});
