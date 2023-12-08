import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyChartComponent } from './body-chart.component';

describe('BodyChartComponent', () => {
  let component: BodyChartComponent;
  let fixture: ComponentFixture<BodyChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BodyChartComponent]
    });
    fixture = TestBed.createComponent(BodyChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
