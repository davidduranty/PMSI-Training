import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDiagnosticComponent } from './liste-diagnostic.component';

describe('ListeDiagnosticComponent', () => {
  let component: ListeDiagnosticComponent;
  let fixture: ComponentFixture<ListeDiagnosticComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeDiagnosticComponent]
    });
    fixture = TestBed.createComponent(ListeDiagnosticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
