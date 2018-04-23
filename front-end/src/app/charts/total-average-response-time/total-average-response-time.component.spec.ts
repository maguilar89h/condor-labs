import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalAverageResponseTimeComponent } from './total-average-response-time.component';

describe('TotalAverageResponseTimeComponent', () => {
  let component: TotalAverageResponseTimeComponent;
  let fixture: ComponentFixture<TotalAverageResponseTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalAverageResponseTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalAverageResponseTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
