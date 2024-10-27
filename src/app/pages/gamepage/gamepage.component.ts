import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { MatIconButton } from '@angular/material/button';
import { GameService } from '../../services/gameservice/gameservice.service';

interface Game {
  id: number;
  name: string,
  description: string,
  background_image: string,
  image_logo: string,
  rating: number
}

interface Image {
  id: number;
  src: string;
}

interface Platforms {
  id: number;
  name: string;
}


@Component({
  selector: 'app-game',
  standalone: true,
  imports: [NgOptimizedImage, MatIconButton],
  templateUrl: './gamepage.component.html',
  styleUrls: ['./gamepage.component.scss'],
})
export class GamePageComponent implements OnInit{
  game!: Game;
  platforms: Platforms[] = [];

  images: Image[] = [
    { id: 1, src: 'assets/gamefundo.jpg' },
    { id: 2, src: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1262540/ss_76eb69e48a6a0cc256603c2aa0844e5e6d5c8168.jpg?t=1716834386' },
    { id: 3, src: 'assets/backgroundimage1.png' },
    { id: 4, src: 'assets/imagelogo1.png' },
    { id: 5, src: 'assets/imagelogo2.png' },
  ]
  constructor(private gameService: GameService, private route: ActivatedRoute) {};

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id) {
      this.LoadGame(id);
      this.LoadPlatformsByGame(id);
    }
  }

  LoadGame(id: number): void {
    this.gameService.getGame(id).subscribe({
      next: (data) => (this.game = data),
      error: (error) => console.error("Error by finding the game", error),
      complete: () => console.log("Game loaded successfully")
    })
  }

  LoadPlatformsByGame(gameId: number): void {
    this.gameService.getPlatformsByGameId(gameId).subscribe({
      next: (data) => (this.platforms = data),
      error: (error) => console.error("Error by finding the platform", error),
      complete: () => console.log("platforms loaded successfully")
    })
      
  }
  selectedImage: string = this.images[0].src;

  selectImage(imageSrc: string): void {
    this.selectedImage = imageSrc;
  }
}
