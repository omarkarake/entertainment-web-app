import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = false;

  login(): Observable<any> {
    // Simulate a login
    this.loggedIn = true;
    return of({ success: true });
  }

  isAuthenticated(): boolean {
    return this.loggedIn;
  }
}
