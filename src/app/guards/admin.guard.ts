import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canActivate(): Observable<boolean> {
    return this.authService.checkAuth().pipe(
      map((user) => {
        if (user.admin) {
          return true;
        } else {
          this.router.navigateByUrl('/reservations');
          return false;
        }
      }),
      catchError(() => {
        this.router.navigateByUrl('/signin');
        return of(false);
      }),
    );
  }
}
