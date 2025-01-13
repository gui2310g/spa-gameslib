import { Component, OnInit, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon'
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIcon, RouterLink, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {  
  isSidenavOpen = false; 
  search = signal<string>("");
  user!: User | undefined;
 
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.UserStatus();
  }

  toggleSidenav(): void {
    this.isSidenavOpen = !this.isSidenavOpen;
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
      const payload = JSON.parse(atob(token.split('.')[1]));
      this.user = { 
        username: payload.sub,
        email: '',
        password: ''
      } 
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