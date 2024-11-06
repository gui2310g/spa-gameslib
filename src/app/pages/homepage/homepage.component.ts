import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { GamesListsComponent } from '../../components/gameslists/gameslists.component';
import { GameComponent } from '../../components/game/game.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [MatIcon, GamesListsComponent, GameComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
}
