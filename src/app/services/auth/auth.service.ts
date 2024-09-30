import { inject, Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { catchError, from, Observable, of, switchMap, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  firebaseAuth = inject(Auth);
  router = inject(Router);

  register(
    email: string,
    username: string,
    password: string
  ): Observable<void> {
    const promise = createUserWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then((response) =>
      updateProfile(response.user, { displayName: username })
    );
    return from(promise);
  }

  signin(email: string, password: string): Observable<void> {
    const promise = signInWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then(() => {});
    return from(promise);
  }

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

    // ------------------------------

    // return this.signin(email, password).pipe(
    //   take(1), // Ensures the observable completes after one emission
    //   // Handle success and error cases within the pipe
    //   switchMap(() => {
    //     this.loggedIn = true;
    //     return of({ success: true });
    //   }),
    //   catchError(() => {
    //     return of({ success: false });
    //   })
    // );
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

    // ------------------------------
    // const username = email.split('@')[0];

    // return this.register(email, username, password).pipe(
    //   take(1), // Ensures the observable completes after one emission
    //   // Handle success and error cases within the pipe
    //   switchMap(() => {
    //     this.router.navigateByUrl('/login');
    //     return of({ success: true });
    //   }),
    //   catchError(() => {
    //     return of({ success: false, message: 'User already exists' });
    //   })
    // );
  }

  isAuthenticated(): boolean {
    return this.loggedIn;
  }

  logout(): void {
    this.loggedIn = false;
  }
}
