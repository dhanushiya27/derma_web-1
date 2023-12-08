import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditProblemsComponent } from './add-edit-problems.component';

describe('AddEditProblemsComponent', () => {
  let component: AddEditProblemsComponent;
  let fixture: ComponentFixture<AddEditProblemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AddEditProblemsComponent]
    });
    fixture = TestBed.createComponent(AddEditProblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
