import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FractionalFormComponent } from './fractional-form.component';

describe('FractionalFormComponent', () => {
  let component: FractionalFormComponent;
  let fixture: ComponentFixture<FractionalFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FractionalFormComponent]
    });
    fixture = TestBed.createComponent(FractionalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
