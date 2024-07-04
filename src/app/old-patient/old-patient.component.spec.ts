import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldPatientComponent } from './old-patient.component';

describe('OldPatientComponent', () => {
  let component: OldPatientComponent;
  let fixture: ComponentFixture<OldPatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OldPatientComponent]
    });
    fixture = TestBed.createComponent(OldPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
