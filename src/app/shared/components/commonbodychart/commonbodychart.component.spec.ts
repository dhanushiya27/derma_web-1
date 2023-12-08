import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonbodychartComponent } from './commonbodychart.component';

describe('CommonbodychartComponent', () => {
  let component: CommonbodychartComponent;
  let fixture: ComponentFixture<CommonbodychartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonbodychartComponent]
    });
    fixture = TestBed.createComponent(CommonbodychartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
