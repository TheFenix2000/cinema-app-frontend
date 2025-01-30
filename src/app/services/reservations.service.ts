import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ReservationsService {
  constructor(private readonly http: HttpClient) {}

  //TODO fix types
  reserveSeat(showtime: string, seatNumber: string): Observable<any> {
    return this.http.post(
      `${environment.API_URL}/reservations`,
      {
        showtime,
        seatNumber,
      },
      { withCredentials: true },
    );
  }
}
