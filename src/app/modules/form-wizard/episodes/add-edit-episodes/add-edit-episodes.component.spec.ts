import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEpisodesComponent } from './add-edit-episodes.component';

describe('AddEditEpisodesComponent', () => {
  let component: AddEditEpisodesComponent;
  let fixture: ComponentFixture<AddEditEpisodesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AddEditEpisodesComponent]
    });
    fixture = TestBed.createComponent(AddEditEpisodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
