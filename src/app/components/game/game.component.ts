import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgStyle, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { GameService } from '../../services/gameservice/gameservice.service';

export interface Game {
  id: number;
  slug: string;
  name: string
}

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [NgStyle, NgOptimizedImage, RouterLink],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
  encapsulation: ViewEncapsulation.Emulated
})
export class GameComponent implements OnInit{
  games: Game[] = [];
    page: number = 0;
    size: number = 10;

    constructor(private gameService: GameService) {}

    ngOnInit(): void {
        this.loadGames();
    }

    loadGames(): void {
        this.gameService.getGames(this.page, this.size).subscribe({
            next: (data) => this.games = data.content,
            error: (error) => console.error("Error by finding games", error),
            complete: () => console.log("Games loaded successfully")
        });
    }

}


