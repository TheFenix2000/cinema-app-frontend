import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [DatePipe, CommonModule],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.css',
})
export class ReservationsComponent {
  // TODO remove later
  reservations = [
    {
      seat: 'A12',
      reservationDate: new Date('2024-01-20T10:30:00'),
      showtime: {
        date: new Date('2024-01-25T19:00:00'),
        movie: {
          title: 'Inception',
          year: 2010,
          genre: 'Sci-Fi/Action',
          director: 'Christopher Nolan',
          actors: 'Leonardo DiCaprio, Joseph Gordon-Levitt',
          plot: 'A thief who steals corporate secrets through dream-sharing technology...',
          poster:
            'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
        },
      },
    },
    {
      seat: 'B15',
      reservationDate: new Date('2024-01-21T14:15:00'),
      showtime: {
        date: new Date('2024-01-27T20:30:00'),
        movie: {
          title: 'The Matrix',
          year: 1999,
          genre: 'Sci-Fi/Action',
          director: 'Lana and Lilly Wachowski',
          actors: 'Keanu Reeves, Laurence Fishburne',
          plot: 'A computer programmer discovers that reality as he knows it is a simulation...',
          poster:
            'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
        },
      },
    },
    {
      seat: 'C8',
      reservationDate: new Date('2024-01-22T09:45:00'),
      showtime: {
        date: new Date('2024-01-28T18:15:00'),
        movie: {
          title: 'Interstellar',
          year: 2014,
          genre: 'Sci-Fi/Drama',
          director: 'Christopher Nolan',
          actors: 'Matthew McConaughey, Anne Hathaway',
          plot: 'A team of explorers travel through a wormhole in space in an attempt to save humanity...',
          poster:
            'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
        },
      },
    },
  ];
}
