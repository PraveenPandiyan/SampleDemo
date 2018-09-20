import { TestBed, inject } from '@angular/core/testing';

import { BeanService } from './bean.service';

describe('BeanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeanService]
    });
  });

  it('should be created', inject([BeanService], (service: BeanService) => {
    expect(service).toBeTruthy();
  }));
});
