import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canActivate(): Observable<boolean> {
    return this.authService.checkAuth().pipe(
      map((user) => {
        return !!user;
      }),
      catchError((error) => {
        console.log(error);
        this.router.navigateByUrl('/signin');
        return of(false);
      }),
    );
  }
}
