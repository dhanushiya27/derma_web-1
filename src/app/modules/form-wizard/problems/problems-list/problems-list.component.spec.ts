import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemsListComponent } from './problems-list.component';

describe('ProblemsListComponent', () => {
  let component: ProblemsListComponent;
  let fixture: ComponentFixture<ProblemsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProblemsListComponent]
    });
    fixture = TestBed.createComponent(ProblemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
