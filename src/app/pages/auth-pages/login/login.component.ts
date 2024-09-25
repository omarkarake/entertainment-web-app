import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });

    this.loginForm.valueChanges.subscribe((value) => {
      console.log('Form value:', value);
    });
  }

  // Submit function
  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      console.log('Form value:', this.loginForm.value);
      // this.authService.login(email, password).subscribe((res) => {
      //   if (res.success) {
      //     console.log('Login successful');
      //     this.router.navigate(['/home']);
      //   }
      // });
    } else {
      this.logValidationErrors();
    }
  }

  // Method to log validation errors in the console
  logValidationErrors(): void {
    const controls = this.loginForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        console.log(`${name} is invalid`, controls[name].errors);
      }
    }
  }

  // Getter for email control
  get emailControl(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  // Getter for password control
  get passwordControl(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }
}
