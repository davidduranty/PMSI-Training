import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { OldPatientComponent } from './old-patient/old-patient.component';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { RouterModule } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { ProfilPatientComponent } from './profil-patient/profil-patient.component';
import { ListeDiagnosticComponent } from './liste-diagnostic/liste-diagnostic.component';
import { AddDiagnosticComponent } from './add-diagnostic/add-diagnostic.component';



@NgModule({
  declarations: [
    AppComponent,
    NewPatientComponent,
    OldPatientComponent,
    PatientComponent,
    ProfilPatientComponent,
    ListeDiagnosticComponent,
    AddDiagnosticComponent,

  ],
  imports: [
    BrowserModule,

    RouterModule.forRoot([
      { path: '', component: NewPatientComponent },
      { path: 'oldpatient', component: OldPatientComponent },
      { path: 'patient', component: PatientComponent },
      { path: 'profil', component: ProfilPatientComponent },
      { path: 'liste-diagnostic', component: ListeDiagnosticComponent },
      { path: 'add-diagnostic', component: AddDiagnosticComponent },

    ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
