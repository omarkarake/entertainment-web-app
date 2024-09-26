import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      repeatPassword: new FormControl('', [Validators.required]),
    });
  }

  // Custom validator to ensure passwords match
  passwordsMatchValidator(): { [key: string]: boolean } | null {
    const password = this.signupForm.get('password')?.value;
    const repeatPassword = this.signupForm.get('repeatPassword')?.value;

    if (password !== repeatPassword) {
      return { passwordMismatch: true };
    }
    return null;
  }

  // Submit function
  onSubmit(): void {
    if (this.signupForm.valid) {
      const { email, password } = this.signupForm.value;

      // Use the new signup method in AuthService
      this.authService.signup(email, password).subscribe((res) => {
        if (res.success) {
          console.log('Signup successful');
          this.toastr.error('Signup successful');
          this.router.navigate(['/login']); // Redirect to login after successful signup
        } else {
          console.log('Signup failed:', res.message);
          this.toastr.error('Signup failed:', res.message);
        }
      });
    } else {
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
}
