import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { SigninComponent } from './pages/login/login.component';
import { MovieReservationComponent } from './pages/movie-reservation/movie-reservation.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { RegisterComponent } from './pages/register/register.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { ShowtimesComponent } from './pages/showtimes/showtimes.component';
import { SignoutComponent } from './pages/signout/signout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full',
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: 'reservations',
        component: ReservationsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'showtimes',
        component: ShowtimesComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'movie-reservation',
        component: MovieReservationComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  { path: 'signout', component: SignoutComponent },
  { path: '**', redirectTo: 'signin' },
];
