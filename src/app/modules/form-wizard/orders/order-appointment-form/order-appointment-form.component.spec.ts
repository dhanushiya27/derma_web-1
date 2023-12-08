import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderAppointmentFormComponent } from './order-appointment-form.component';

describe('OrderAppointmentFormComponent', () => {
  let component: OrderAppointmentFormComponent;
  let fixture: ComponentFixture<OrderAppointmentFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OrderAppointmentFormComponent]
    });
    fixture = TestBed.createComponent(OrderAppointmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
