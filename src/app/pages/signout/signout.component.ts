import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signout',
  standalone: true,
  imports: [],
  template: '',
})
export class SignoutComponent implements OnInit {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.authService.signout().subscribe({
      next: () => {
        this.router.navigateByUrl('/signin');
      },
      error: () => {
        this.router.navigateByUrl('/signin');
      },
    });
  }
}
