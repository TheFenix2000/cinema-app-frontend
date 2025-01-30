import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { DatePipe } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { ReservationsService } from './services/reservations.service';
import { ShowtimesService } from './services/showtimes.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    AuthService,
    ShowtimesService,
    ReservationsService,
    AuthGuard,
    AdminGuard,
    DatePipe,
  ],
};
