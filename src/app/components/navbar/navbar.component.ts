import { Component, OnInit, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon'
import { MatIconButton } from '@angular/material/button';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIcon, MatIconButton, RouterLink, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {  
  search = signal<string>("");
  user!: User | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.UserStatus();
  }

  handleSubmit(): void {
    if(this.search()) {
      this.router.navigate(['/search'], { 
        queryParams: { name: this.search() }
      }) 
    }
  }

  UserStatus() {
    const token = sessionStorage.getItem('token');
    if(token) {
      console.log('Token:', token);
      const payload = JSON.parse(atob(token.split('.')[1]));
      this.user = { 
        username: payload.sub,
        email: '',
        password: ''
      }
      console.log('Username:', this.user.username); 
    }
  }

  isLoggedIn(): boolean { 
    return sessionStorage.getItem('token') !== null; 
  }

  logout() {
    sessionStorage.removeItem('token');
    this.user = undefined;
    window.alert('Logged out successfully!'); 
    this.router.navigate([''])
  }
}