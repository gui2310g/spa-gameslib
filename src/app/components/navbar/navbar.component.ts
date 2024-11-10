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
  user!: User | any;

  constructor(private router: Router) {};

  ngOnInit(): void {
      this.updateUserStatus();
  }
  handleSubmit(): void {
    if(this.search()) {
      this.router.navigate(['/search'], { 
        queryParams: { name: this.search() }
      }) 
    }
  }

  updateUserStatus() {
    const authUser = localStorage.getItem('authUser');
    if(authUser) {
      this.user = { username: this.user.username}
    } else {
      this.user = null
    }
  }

  isLoggedIn(): boolean {
    return this.user !== null;
  }

  logout() {
    localStorage.removeItem('authUser');
    window.alert('Logged out successfully!'); 
    this.user = null;
    this.router.navigate([''])
  }

}
