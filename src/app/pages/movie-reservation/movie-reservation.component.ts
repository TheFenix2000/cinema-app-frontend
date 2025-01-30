import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservationsService } from '../../services/reservations.service';
import { ShowtimesService } from '../../services/showtimes.service';

@Component({
  selector: 'app-movie-reservation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-reservation.component.html',
  styleUrl: './movie-reservation.component.css',
})
export class MovieReservationComponent implements OnInit {
  // TODO fix types and returns and parameters from url
  movieTitle: string = '';
  format: string = '';
  showtime: Date = new Date();
  screening: any = null;
  seats: any[][] = [];
  unavailableSeats: any[] = [];
  selectedSeat: string = '';

  constructor(
    private route: ActivatedRoute,
    private readonly showtimesService: ShowtimesService,
    private readonly reservationsService: ReservationsService,
  ) {
    this.initializeSeats();
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.movieTitle = params['title'];
      this.format = params['format'];
      this.showtime = new Date(params['time']);
    });
    this.showtimesService
      .findShowtime(this.movieTitle, this.format, this.showtime)
      .subscribe((showtime) => {
        this.screening = showtime[0];
      });
  }

  private initializeSeats() {
    this.seats = Array(10)
      .fill(null)
      .map((_, rowIndex) =>
        Array(15)
          .fill(null)
          .map((_, seatIndex) => ({
            id: `${rowIndex + 1}-${seatIndex + 1}`,
            row: rowIndex + 1,
            number: seatIndex + 1,
            isSelected: false,
            isReserved: Math.random() < 0.2, // Randomly mark some seats as reserved
          })),
      );
  }

  getRowLabel(row: number): string {
    return String.fromCharCode(64 + row); // Converts 1 to A, 2 to B, etc.
  }

  toggleSeat(seat: any) {
    if (!this.unavailableSeats.includes(seat)) {
      this.selectedSeat = `${this.getRowLabel(seat.row)}${seat.number}`;
    }
    if (!seat.isReserved) {
      seat.isSelected = !seat.isSelected;
    }
  }

  getSelectedSeats(): any[] {
    return this.seats.flat().filter((seat) => seat.isSelected);
  }

  getSelectedSeatsDisplay(): string {
    return this.getSelectedSeats()
      .map((seat) => `${this.getRowLabel(seat.row)}${seat.number}`)
      .join(', ');
  }

  reserveSeats(): void {
    // const selectedSeats = this.getSelectedSeats();
    // this.reservationsService
    //   .reserveSeat(this.screening._id, this.selectedSeat)
    //   .subscribe((a) => console.log(a));
    alert('Not implemented');
  }
}
