import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YesornoradiobuttonComponent } from './yesornoradiobutton.component';

describe('YesornoradiobuttonComponent', () => {
  let component: YesornoradiobuttonComponent;
  let fixture: ComponentFixture<YesornoradiobuttonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [YesornoradiobuttonComponent]
    });
    fixture = TestBed.createComponent(YesornoradiobuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
