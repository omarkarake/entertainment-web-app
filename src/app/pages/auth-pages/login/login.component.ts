import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  signup() {
    // Call your signup method from the auth service
    this.authService.login().subscribe((response) => {
      if (response.success) {
        // On successful login, redirect to home
        this.router.navigate(['/login']);
      }
    });
  }
}
