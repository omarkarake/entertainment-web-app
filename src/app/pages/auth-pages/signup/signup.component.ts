import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
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
      console.log('Form value:', value);
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
  onSubmit(): void {
    if (this.signupForm.valid) {
      const { email, password } = this.signupForm.value;
      this.authService.signup(email, password).subscribe((res) => {
        if (res.success) {
          this.router.navigate(['/home']);
        }
      });
    } else {
      // Handle invalid form
      console.log('Form is invalid');
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
