import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { AppRoutingModule } from './app-routing.module';
import { OldPatientComponent } from './old-patient/old-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    NewPatientComponent,
    OldPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
