import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FractionalComponent } from './fractional.component';

describe('FractionalComponent', () => {
  let component: FractionalComponent;
  let fixture: ComponentFixture<FractionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FractionalComponent]
    });
    fixture = TestBed.createComponent(FractionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
