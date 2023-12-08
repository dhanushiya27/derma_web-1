import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiCheckboxComponent } from './multi-checkbox.component';

describe('MultiCheckboxComponent', () => {
  let component: MultiCheckboxComponent;
  let fixture: ComponentFixture<MultiCheckboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MultiCheckboxComponent]
    });
    fixture = TestBed.createComponent(MultiCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
