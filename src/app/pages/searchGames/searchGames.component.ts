import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../../services/gameservice/gameservice.service';
import { RouterLink } from '@angular/router';
import { Game } from '../../models/game.model';

@Component({
  selector: 'app-searched-games',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './searchGames.component.html',
  styleUrls: ['./searchGames.component.scss'],
})
export class SearchGamesComponent implements OnInit {
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
