import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVitalsComponent } from './add-vitals.component';

describe('AddVitalsComponent', () => {
  let component: AddVitalsComponent;
  let fixture: ComponentFixture<AddVitalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AddVitalsComponent]
    });
    fixture = TestBed.createComponent(AddVitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
