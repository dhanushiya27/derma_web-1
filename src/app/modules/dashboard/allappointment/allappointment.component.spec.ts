import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllappointmentComponent } from './allappointment.component';

describe('AllappointmentComponent', () => {
  let component: AllappointmentComponent;
  let fixture: ComponentFixture<AllappointmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AllappointmentComponent]
    });
    fixture = TestBed.createComponent(AllappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
