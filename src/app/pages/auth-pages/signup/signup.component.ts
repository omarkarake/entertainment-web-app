import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  Validators,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.signupForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
        repeatPassword: new FormControl('', [Validators.required]),
      },
      { validators: this.passwordsMatchValidator() }
    );

    this.signupForm.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  // Custom validator to ensure passwords match
  passwordsMatchValidator(): ValidatorFn {
    return (form: AbstractControl): { [key: string]: boolean } | null => {
      const password = form.get('password')?.value;
      const repeatPassword = form.get('repeatPassword')?.value;
      if (password !== repeatPassword) {
        return { passwordMismatch: true };
      }
      return null;
    };
  }

  // Submit function
  // Submit function
  onSubmit(): void {
    if (this.signupForm.valid) {
      const { email, password } = this.signupForm.value;
      this.authService.signup(email, password).subscribe((res) => {
        if (res.success) {
          this.router.navigate(['/home']);
        }
      });
    } else {
      // Log validation errors, including password mismatch
      if (this.signupForm.hasError('passwordMismatch')) {
        console.log('Password mismatch error: Passwords do not match.');
      }
      this.logValidationErrors();
    }
  }

  // Method to log validation errors in the console
  logValidationErrors(): void {
    const controls = this.signupForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        console.log(`${name} is invalid`, controls[name].errors);
      }
    }
  }

  // Getter for email control
  get emailControl(): FormControl {
    return this.signupForm.get('email') as FormControl;
  }

  // Getter for password control
  get passwordControl(): FormControl {
    return this.signupForm.get('password') as FormControl;
  }

  // Getter for repeat password control
  get repeatPasswordControl(): FormControl {
    return this.signupForm.get('repeatPassword') as FormControl;
  }

  // Getter to show if passwords mismatch
  get passwordMismatch(): boolean {
    return this.signupForm.hasError('passwordMismatch');
  }
}
