import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { OldPatientComponent } from './old-patient/old-patient.component';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    NewPatientComponent,
    OldPatientComponent,

  ],
  imports: [
    BrowserModule,

    RouterModule.forRoot([
      { path: '', component: NewPatientComponent },
      { path: 'oldpatient', component: OldPatientComponent },
    ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
