import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { GamesListsComponent } from '../../components/gameslists/gameslists.component';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [MatIcon, GamesListsComponent, NgClass],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
}
