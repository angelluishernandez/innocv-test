import { User } from './../shared/user.model';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  apiUrl = 'http://hello-world.innocv.com/api/user';

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }

    return throwError('Something bad happened; please try again later.');
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getUsers() {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUser(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  addUser(user: User) {
    return this.http.post<User>(`${this.apiUrl}`, user, this.httpOptions);
  }

  deleteUser(id: number) {
    console.log('entra');

    return this.http
      .delete<User>(`${this.apiUrl}/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  updateUser(id: number, body: any) {
    return this.http.put<User>(`${this.apiUrl}/${id}`, body);
  }
}
