import { Component, ViewEncapsulation } from '@angular/core';
import { NgStyle, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface Game {
  id: number;
  image: string;
  alt: string;
}

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [NgStyle, NgOptimizedImage, RouterLink],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
  encapsulation: ViewEncapsulation.Emulated
})
export class GameComponent {
  games: Game[] = [
    {
      id: 1,
      image: 'https://cdn2.steamgriddb.com/grid/f570bd23dab3563703638856f9d0952d.png',
      alt: 'crash mind over mutant',
    },
    {
      id: 2,
      image: 'https://cdn2.steamgriddb.com/grid/4f02cebf5673725a4ef1b1f2f9a95080.png',
      alt: 'obscure image',
    },
    {
      id: 3,
      image: 'https://cdn2.steamgriddb.com/grid/a9f9ef04f6c8bcc449084e0cc4183cf7.png',
      alt: 'red dead redemption logo',
    },
    {
      id: 4,
      image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/42680/library_600x900_2x.jpg?t=1566872035',
      alt: 'mw3 logo',
    },
    {
      id: 5,
      image: 'https://cdn2.steamgriddb.com/grid/4f70afdc96d8fdd57e8f69f0759b01e7.png',
      alt: 'borderlands',
    },
    {
      id: 6,
      image: 'https://cdn2.steamgriddb.com/grid/ca70ee660dbe041ce148b902503fd5a0.png',
      alt: ' bf4 logo',
    }
  ];
}
