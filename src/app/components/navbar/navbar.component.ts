import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon'
import { MatIconButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIcon, MatIconButton, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  
}
