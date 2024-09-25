import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = false;
  private users: { email: string; password: string }[] = [];

  login(): Observable<any> {
    // Simulate a login
    this.loggedIn = true;
    return of({ success: true });
  }

  // Simulate a signup request
  signup(email: string, password: string): Observable<any> {
    // Simulate storing user data
    this.users.push({ email, password });
    console.log('User signed up:', this.users);
    return of({ success: true });
  }

  isAuthenticated(): boolean {
    return this.loggedIn;
  }
}
