import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameComponent } from '../../components/game/game.component';
import { GameService } from '../../services/gameservice/gameservice.service';
import { RouterLink } from '@angular/router';
import { Game } from '../../models/game.model';

@Component({
  selector: 'app-searched-games',
  standalone: true,
  imports: [GameComponent, RouterLink],
  templateUrl: './searched-games.component.html',
  styleUrls: ['./searched-games.component.scss'],
})
export class SearchedGamesComponent implements OnInit {
  query: string = '';
  games: Game[] = [];

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.query = params['name'];
      this.LoadSearchedGames();
    });
  }

  LoadSearchedGames(): void {
    this.gameService.getSearchedGame(this.query).subscribe((results) => {
      this.games = results;
    });
  }
}
