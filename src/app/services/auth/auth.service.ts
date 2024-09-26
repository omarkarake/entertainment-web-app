import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = false;
  private users = [
    { email: 'omar@gmail.com', password: 'Omar12345' }, // Static user
  ];

  // Login method
  login(email: string, password: string): Observable<any> {
    // Check if user credentials match the static user
    const user = this.users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      this.loggedIn = true;
      return of({ success: true });
    } else {
      return of({ success: false });
    }
  }

  // Signup method
  signup(email: string, password: string): Observable<any> {
    // Simulate storing user data in the array
    const userExists = this.users.find((user) => user.email === email);

    if (!userExists) {
      this.users.push({ email, password });
      return of({ success: true });
    } else {
      return of({ success: false, message: 'User already exists' });
    }
  }

  isAuthenticated(): boolean {
    return this.loggedIn;
  }
}
