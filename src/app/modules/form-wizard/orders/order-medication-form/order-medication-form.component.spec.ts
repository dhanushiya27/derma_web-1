import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMedicationFormComponent } from './order-medication-form.component';

describe('OrderMedicationFormComponent', () => {
  let component: OrderMedicationFormComponent;
  let fixture: ComponentFixture<OrderMedicationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OrderMedicationFormComponent]
    });
    fixture = TestBed.createComponent(OrderMedicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
