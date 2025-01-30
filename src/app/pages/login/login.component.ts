import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { LoginCredentials } from '../../../types/auth';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class SigninComponent {
  logincredentials: LoginCredentials = {
    login: '',
    password: '',
  };

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {}

  onSignin(): void {
    this.authService.signin(this.logincredentials).subscribe((response) => {
      console.log(response);
    });
    setTimeout(() => {
      this.router.navigateByUrl('/reservations');
    }, 500);
  }
}
