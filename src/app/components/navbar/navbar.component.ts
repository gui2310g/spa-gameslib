import { Component, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon'
import { MatIconButton } from '@angular/material/button';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIcon, MatIconButton, RouterLink, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {  
  search = signal<string>("");

  constructor(private router: Router) {};

  handleSubmit(): void {
    if(this.search()) {
      this.router.navigate(['/search'], { 
        queryParams: { name: this.search() }
      }) 
    }
  }
}
