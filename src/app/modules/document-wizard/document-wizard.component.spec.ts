import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentWizardComponent } from './document-wizard.component';

describe('DocumentWizardComponent', () => {
  let component: DocumentWizardComponent;
  let fixture: ComponentFixture<DocumentWizardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DocumentWizardComponent]
    });
    fixture = TestBed.createComponent(DocumentWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
