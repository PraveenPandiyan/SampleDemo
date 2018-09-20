import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BruschettaComponent } from './bruschetta.component';

describe('BruschettaComponent', () => {
  let component: BruschettaComponent;
  let fixture: ComponentFixture<BruschettaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BruschettaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BruschettaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
