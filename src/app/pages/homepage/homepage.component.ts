import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [MatIcon, NgClass],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  reverse: string = 'reverse'
}
