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

  createUser(user: User): Observable<User> {
    return this.http
      .post<User>(`${this.apiUrl}/users`, user)
      .pipe(catchError(this.handleError));
  }

  loginUser(loggedUser: LoggedUser): Observable<any> {
    return this.http
      .post(`${this.apiUrl}/auth`, loggedUser, { responseType: 'text' })
      .pipe(
        tap((token) => {
          sessionStorage.setItem('token', token);
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
