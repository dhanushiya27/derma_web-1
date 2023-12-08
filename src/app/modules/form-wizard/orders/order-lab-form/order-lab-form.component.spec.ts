import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderLabFormComponent } from './order-lab-form.component';

describe('OrderLabFormComponent', () => {
  let component: OrderLabFormComponent;
  let fixture: ComponentFixture<OrderLabFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OrderLabFormComponent]
    });
    fixture = TestBed.createComponent(OrderLabFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
