import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, tap } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { CreateUserObj, LoginCredentials } from '../../types/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly userSubject$$ = new BehaviorSubject<any | null>(null);
  public readonly user$ = this.userSubject$$.asObservable();

  constructor(private readonly http: HttpClient) {}

  register(createUser: CreateUserObj): Observable<HttpEvent<string>> {
    return this.http.post(`${environment.API_URL}/auth/register`, createUser, {
      observe: 'events',
      responseType: 'text',
      withCredentials: true,
    });
  }

  signin(loginCredentials: LoginCredentials): Observable<HttpEvent<string>> {
    return this.http.post(
      `${environment.API_URL}/auth/signin`,
      loginCredentials,
      { observe: 'events', responseType: 'text', withCredentials: true },
    );
  }

  signout(): Observable<HttpEvent<string>> {
    return this.http
      .get(`${environment.API_URL}/auth/signout`, {
        observe: 'events',
        responseType: 'text',
        withCredentials: true,
      })
      .pipe(tap(() => this.userSubject$$.next(null)));
  }

  //TODO add types to auth user
  checkAuth(): Observable<any> {
    if (this.userSubject$$.value) {
      return of(this.userSubject$$.value);
    }
    return this.http
      .get<any>(`${environment.API_URL}/users/me`, { withCredentials: true })
      .pipe(
        tap((user) => this.userSubject$$.next(user)),
        catchError((err) => {
          this.userSubject$$.next(null);
          throw err;
        }),
      );
  }
}
