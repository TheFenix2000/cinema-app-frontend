import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { CreateUserObj } from '../../../types/auth';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  createUser: CreateUserObj = {
    login: '',
    password1: '',
    password2: '',
  };

  constructor(
    private readonly authService: AuthService,
    private readonly http: HttpClient,
    private readonly router: Router,
  ) {}

  private passwordsMatch(): boolean {
    return this.createUser.password1 === this.createUser.password2;
  }

  onRegister(): void {
    if (!this.passwordsMatch()) {
      alert('Passwords do not match');
      return;
    }
    this.authService.register(this.createUser).subscribe((response) => {
      console.log(response);
    });
    this.router.navigateByUrl('/signin');
  }
}
