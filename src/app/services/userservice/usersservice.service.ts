import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment.development';
import { User, LoggedUser } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  createUser(user: User): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/users/create`, user)
      .pipe(catchError(this.handleError));
  }

  loginUser(loggedUser: LoggedUser): Observable<any> {
    return this.http
      .post(`${this.apiUrl}/auth/login`, loggedUser, { responseType: 'text' }) 
      .pipe(
        tap((token) => {
          localStorage.setItem('authUser', token);
        }),
        catchError(this.handleError)
      );
  }
  
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred. Please try again.';
    if (error.status === 409) errorMessage = 'User or email already exists';
    
    return throwError(() => new Error(errorMessage));
  }
}
