import { Component } from '@angular/core';
import { GameListComponent } from '../../components/gamelist/gamelist.component'
import { GameComponent } from '../../components/game/game.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [GameListComponent, GameComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
}
