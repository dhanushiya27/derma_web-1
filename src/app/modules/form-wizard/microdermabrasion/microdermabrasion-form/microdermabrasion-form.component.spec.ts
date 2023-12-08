import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrodermabrasionFormComponent } from './microdermabrasion-form.component';

describe('MicrodermabrasionFormComponent', () => {
  let component: MicrodermabrasionFormComponent;
  let fixture: ComponentFixture<MicrodermabrasionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MicrodermabrasionFormComponent]
    });
    fixture = TestBed.createComponent(MicrodermabrasionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
