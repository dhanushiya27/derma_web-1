import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryformComponent } from './historyform.component';

describe('HistoryformComponent', () => {
  let component: HistoryformComponent;
  let fixture: ComponentFixture<HistoryformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HistoryformComponent]
    });
    fixture = TestBed.createComponent(HistoryformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
