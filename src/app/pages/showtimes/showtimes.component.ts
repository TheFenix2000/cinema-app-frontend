import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ShowtimesService } from '../../services/showtimes.service';

@Component({
  selector: 'app-showtimes',
  standalone: true,
  imports: [DatePipe, CommonModule],
  templateUrl: './showtimes.component.html',
  styleUrl: './showtimes.component.css',
})
export class ShowtimesComponent implements OnInit {
  showtimes: any[] = [];

  constructor(
    private showtimesService: ShowtimesService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.showtimesService
      .getShowtimes()
      .pipe(
        map((showtimes) => {
          const showtimesMap: Map<string, any> = new Map();
          for (const showtime of showtimes) {
            if (!showtimesMap.has(showtime.movie.title)) {
              showtimesMap.set(showtime.movie.title, {
                ...showtime.movie,
                showtimes: [],
              });
            }
            showtimesMap.get(showtime.movie.title).showtimes.push({
              format: showtime.format,
              showtimeId: showtime._id,
              date: showtime.date,
            });
          }
          return Array.from(showtimesMap.values());
        }),
        map((showtimes) => {
          for (const viewing of showtimes) {
            const viewingsMap: Map<string, any> = new Map();
            for (const screening of viewing.showtimes) {
              if (!viewingsMap.has(screening.format)) {
                viewingsMap.set(screening.format, {
                  format: screening.format,
                  times: [],
                });
              }
              viewingsMap.get(screening.format).times.push({
                date: screening.date,
                showtimeId: screening.showtimeId,
              });
            }
            const aggregatedFormats = Array.from(viewingsMap.values());
            viewing.showtimes = aggregatedFormats;
          }
          return showtimes;
        }),
      )
      .subscribe((data: any) => {
        this.showtimes = data;
      });
  }

  navigateToShowtime(title: string, format: string, time: Date) {
    this.router.navigate(['/movie-reservation'], {
      queryParams: {
        title: title,
        format: format,
        time: time,
      },
    });
  }
}
