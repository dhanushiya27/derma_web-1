import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrodermabrasionComponent } from './microdermabrasion.component';

describe('MicrodermabrasionComponent', () => {
  let component: MicrodermabrasionComponent;
  let fixture: ComponentFixture<MicrodermabrasionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MicrodermabrasionComponent]
    });
    fixture = TestBed.createComponent(MicrodermabrasionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
