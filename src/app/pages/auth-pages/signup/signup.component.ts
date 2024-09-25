import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private authService: AuthService, private router: Router) {}

  login() {
    // Call your login method from the auth service
    this.authService.login().subscribe((response) => {
      if (response.success) {
        // On successful login, redirect to home
        this.router.navigate(['/home']);
      }
    });
  }
}
