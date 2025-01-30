import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ShowtimesService {
  constructor(private readonly http: HttpClient) {}

  //TODO add types
  getShowtimes(): Observable<any> {
    return this.http.get(`${environment.API_URL}/showtimes`, {
      withCredentials: true,
    });
  }

  findShowtime(
    movieTitle: string,
    format: string,
    date: Date,
  ): Observable<any> {
    return this.http.get(
      `${environment.API_URL}/showtimes?title=${movieTitle}&format=${format}&date=${date.toISOString()}`,
      { withCredentials: true },
    );
  }
}
