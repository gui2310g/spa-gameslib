import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { NgStyle, NgOptimizedImage, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { GameService } from '../../services/gameservice/gameservice.service';
import { PaginatorModule } from 'primeng/paginator';

interface Game {
  id: number;
  slug: string;
  name: string
}

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [NgStyle, NgOptimizedImage, RouterLink, PaginatorModule, NgClass],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
  encapsulation: ViewEncapsulation.Emulated
})
export class GameComponent implements OnInit{
  @Input() styledInSearchPage: boolean = false;
  @Input() gamess: any;

  games: Game[] = [];
  page: number = 0;
  size: number = 6;
  totalRecords: number = 0;
  first: number = 0;

  constructor(private gameService: GameService) {}

  ngOnInit(): void { this.loadGames(); }

  loadGames(): void {
    this.gameService.getGames(this.page, this.size).subscribe({
      next: (data) => {
        this.games = data.content,
        this.totalRecords = data.totalElements;
      },
      error: (error) => console.error("Error by finding games", error),
        complete: () => console.log("Games loaded successfully")
      }
    );
  }

  onPageChange(event: any): void {
    this.page = event.page; 
    this.first = event.first; 
    this.loadGames(); 
  }
}