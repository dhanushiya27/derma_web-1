import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFavComponent } from './search-fav.component';

describe('SearchFavComponent', () => {
  let component: SearchFavComponent;
  let fixture: ComponentFixture<SearchFavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SearchFavComponent]
    });
    fixture = TestBed.createComponent(SearchFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
