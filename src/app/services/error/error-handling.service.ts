// error-handling.service.ts
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlingService {
  handleError(error: any) {
    console.error('An error occurred:', error); // Log the error to the console
    return throwError(
      () => new Error('Something went wrong while fetching the data.')
    );
  }
}
