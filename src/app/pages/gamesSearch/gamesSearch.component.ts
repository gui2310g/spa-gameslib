import { Component } from '@angular/core';
import { GameComponent } from '../../components/game/game.component';
import { AccordionModule } from 'primeng/accordion';
import { GameService } from '../../services/gameservice/gameservice.service';
import { Genres, Platforms, Publishers } from '../../models/game.model';

@Component({
  selector: 'app-gamepage',
  templateUrl: './gamesSearch.component.html',
  styleUrl: './gamesSearch.component.scss',
  standalone: true,
  imports: [GameComponent, AccordionModule],
})
export class GamesSearchComponent {
  genres: Genres[] = [];
  platforms: Platforms[] = [];
  publishers: Publishers[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.LoadGenres();
    this.LoadPlatforms();
    this.LoadPublishers();
  }

  LoadGenres(): void {
    this.gameService.getGenres().subscribe({
      next: (data) => (this.genres = data),
      error: (error) => console.error('Error by finding genres', error),
      complete: () => console.log('Genres loaded successfully'),
    });
  }

  LoadPlatforms(): void {
    this.gameService.getPlatforms().subscribe({
      next: (data) => (this.platforms = data),
      error: (error) => console.error('Error by finding platforms', error),
      complete: () => console.log('Platforms loaded succesfully'),
    });
  }

  LoadPublishers(): void {
    this.gameService.getPublishers().subscribe({
      next: (data) => (this.publishers = data),
      error: (error) => console.error('Error by finding publishers', error),
      complete: () => console.log('Publishers loaded succesfully'),
    });
  }
}
