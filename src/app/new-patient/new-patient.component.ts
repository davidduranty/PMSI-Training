import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css']
})
export class NewPatientComponent implements OnInit {

  patientForm: FormGroup;

  constructor(private routes: Router, private fb: FormBuilder) {

    this.patientForm = this.fb.group({
      nom: ['', Validators.required],
      prénom: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      age: ['', [Validators.required, Validators.min(0)]],
      telephone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      genre: ['', Validators.required],
      etatCivil: ['', Validators.required],
      mainPreferee: ['', Validators.required]
    })
  }
  ngOnInit(): void {

  }
  onSubmit(): void {
    console.log('onSubmit called');
    if (this.patientForm.valid) {
      console.log('Form is valid');
      console.log(this.patientForm.value);
      // Rediriger vers une autre page après soumission, par exemple
      this.routes.navigate(['/patient']);
    } else {
      console.log('Form is invalid');
      this.logFormErrors();
    }
  }
  logFormErrors(): void {
    for (const key in this.patientForm.controls) {
      const controlErrors = this.patientForm.get(key)?.errors;
      if (controlErrors != null) {
        for (const errorKey in controlErrors) {
          alert('Le champs : ' + key + ', error: ' + errorKey + ', value: ' + '< 8 '+ "n'est pas correct");
        }
      }
    }
  }

  isValidEmail(): boolean {
    const email = this.patientForm.get('email');
    if (!email || !email.value) {
      return false;
    }
    // Regex pour vérifier que l'email ne contient pas de caractères spéciaux ni de chiffres
    const pattern = /^[a-zA-Z]+$/;
    return pattern.test(email.value);
  }

  get emailControl() {
    return this.patientForm.get('email');
  }
}
