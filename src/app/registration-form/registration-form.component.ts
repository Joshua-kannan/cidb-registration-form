import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  // Form controls with validators
  nric = new FormControl('', Validators.required);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W).+$/)
  ]);
  confirmPassword = new FormControl('', Validators.required);
  firstName = new FormControl('', Validators.required);
  lastName = new FormControl('');
  dob = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [
    Validators.required,
    Validators.pattern(/^\+\d{1,3}\d{7,}$/)
  ]);
  gender = new FormControl('', Validators.required);
  nationality = new FormControl('', Validators.required);

  // Password criteria flags
  passwordLength = false;
  hasUppercase = false;
  hasLowercase = false;
  hasNumber = false;
  hasSpecialChar = false;

  // Method to check if passwords match
  get passwordMismatch() {
    return this.password.value !== this.confirmPassword.value && this.confirmPassword.touched;
  }

  // Method to check password criteria
  checkPasswordCriteria(): void {
    const password = this.password.value || '';
    this.passwordLength = password.length >= 8;
    this.hasUppercase = /[A-Z]/.test(password);
    this.hasLowercase = /[a-z]/.test(password);
    this.hasNumber = /\d/.test(password);
    this.hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  }

  // Submit action
  submitForm() {
    if (!this.passwordMismatch) {
      console.log('Form submitted:', {
        nric: this.nric.value,
        password: this.password.value,
        firstName: this.firstName.value,
        dob: this.dob.value,
        email: this.email.value,
        phone: this.phone.value,
        gender: this.gender.value,
        nationality: this.nationality.value
      });
    } else {
      console.log('Password mismatch error');
    }
  }
}
