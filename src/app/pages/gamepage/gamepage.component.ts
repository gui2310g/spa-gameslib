import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgClass } from '@angular/common';
import { MatIconButton } from '@angular/material/button';
import { GameService } from '../../services/gameservice/gameservice.service';
import { Game, Images, Platforms, Genres, Publishers, Ratings } from '../../models/game.model';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [NgClass, MatIconButton],
  templateUrl: './gamepage.component.html',
  styleUrls: ['./gamepage.component.scss'],
})
export class GamePageComponent implements OnInit {
  game!: Game;
  genres: Genres[] = [];
  platforms: Platforms[] = [];
  publishers: Publishers[] = [];
  images: Images[] = [];
  selectedImage: string = '';
  ratings: Ratings[] = [];
  
  constructor(private gameService: GameService, private route: ActivatedRoute) {};

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if(id) {
      this.LoadGame(id);
      this.LoadPlatformsByGame(id);
      this.LoadGenresByGame(id);
      this.LoadPublishersByGame(id);
      this.LoadScreenshotsByGame(id);
      this.LoadEsrbRatingByGame(id);
    }
  }

  LoadGame(id: number): void {
    this.gameService.getGame(id).subscribe({
      next: (data) => (this.game = data)
    })
  }

  LoadPlatformsByGame(gameId: number): void {
    this.gameService.getPlatformsByGameId(gameId).subscribe({
      next: (data) => (this.platforms = data)
    })   
  }

  LoadGenresByGame(gameId: number): void {
    this.gameService.getGenresByGameId(gameId).subscribe({
      next: (data) => (this.genres = data)
    }) 
  }

  LoadPublishersByGame(gameId: number): void {
    this.gameService.getPublishersByGameId(gameId).subscribe({
      next: (data) => (this.publishers = data)
    })
  }

  LoadScreenshotsByGame(gameId: number): void {
    this.gameService.getScreenshotsByGameId(gameId).subscribe({
      next: (data) => {
        this.images = data;
        if(this.images.length > 0) this.selectedImage = this.images[0].url;  
      }
    }) 
  }

  LoadEsrbRatingByGame(gameId: number): void {
    this.gameService.getEsrbRatingByGameId(gameId).subscribe({
      next: (data) => (this.ratings = data)
    })
      
  }
  
  selectImage(imageSrc: string): void {
    this.selectedImage = imageSrc;
  }  

  getGameNoteClass(rating: number): string {
    if (rating < 50) {
      return 'red-background';
    } else if (rating < 70) {
      return 'yellow-background';
    } else {
      return 'default-background'; 
    }
  }
}
