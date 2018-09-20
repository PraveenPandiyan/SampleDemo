import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PepperComponent } from './pepper.component';

describe('PepperComponent', () => {
  let component: PepperComponent;
  let fixture: ComponentFixture<PepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
