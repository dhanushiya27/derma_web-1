import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderClinicalFormComponent } from './order-clinical-form.component';

describe('OrderClinicalFormComponent', () => {
  let component: OrderClinicalFormComponent;
  let fixture: ComponentFixture<OrderClinicalFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OrderClinicalFormComponent]
    });
    fixture = TestBed.createComponent(OrderClinicalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
