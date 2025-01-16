import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { GameService } from '../../services/gameservice/gameservice.service';
import { Game } from '../../models/game.model';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
  encapsulation: ViewEncapsulation.Emulated
})
export class GameComponent implements OnInit{
  @Input() styledInSearchPage: boolean = false;
  @Input() games: Game[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void { this.loadGames(); }

  loadGames(): void {
    this.gameService.getGames().subscribe({
      next: (data) => this.games = data,
      error: (error) => console.error("Error by finding games", error),
    });
  }
}