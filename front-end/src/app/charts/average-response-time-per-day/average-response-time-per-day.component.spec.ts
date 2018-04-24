import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageResponseTimePerDayComponent } from './average-response-time-per-day.component';

describe('AverageResponseTimePerDayComponent', () => {
  let component: AverageResponseTimePerDayComponent;
  let fixture: ComponentFixture<AverageResponseTimePerDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AverageResponseTimePerDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageResponseTimePerDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
