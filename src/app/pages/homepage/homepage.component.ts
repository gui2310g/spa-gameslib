import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { GamesListsComponent } from '../../components/gameslists/gameslists.component';
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [MatIcon, GamesListsComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
}
