import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalRequestsPerMachineComponent } from './total-requests-per-machine.component';

describe('TotalRequestsPerMachineComponent', () => {
  let component: TotalRequestsPerMachineComponent;
  let fixture: ComponentFixture<TotalRequestsPerMachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalRequestsPerMachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalRequestsPerMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
