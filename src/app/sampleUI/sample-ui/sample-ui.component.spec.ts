import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleUiComponent } from './sample-ui.component';

describe('SampleUiComponent', () => {
  let component: SampleUiComponent;
  let fixture: ComponentFixture<SampleUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SampleUiComponent]
    });
    fixture = TestBed.createComponent(SampleUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
