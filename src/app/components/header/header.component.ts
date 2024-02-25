import { Component } from '@angular/core';
import { TokenService } from '../../services/token.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink,MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isAuthenticated$;

  constructor(private tokenService: TokenService, private authService: AuthService, private router : Router) {
    this.isAuthenticated$ = this.tokenService.isAuthentication
  }

  onLogout() {
    this.authService.onLogout().subscribe({
      next: (value) => {
        this.router.navigate([''])
      }
    })
  }
}
