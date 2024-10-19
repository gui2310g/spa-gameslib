import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MatGridList, MatGridTile } from '@angular/material/grid-list'
import { MatIconButton } from '@angular/material/button';
export interface Image {
  id: number;
  src: string;
}

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [NgOptimizedImage, MatGridList, MatGridTile, MatIconButton],
  templateUrl: './gamepage.component.html',
  styleUrls: ['./gamepage.component.scss'],
})
export class GamePageComponent {
  images: Image[] = [
    { id: 1, src: 'assets/gamefundo.jpg' },
    { id: 2, src: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1262540/ss_76eb69e48a6a0cc256603c2aa0844e5e6d5c8168.jpg?t=1716834386' },
    { id: 3, src: 'assets/backgroundimage1.png' },
    { id: 4, src: 'assets/imagelogo1.png' },
    { id: 5, src: 'assets/imagelogo2.png' },
  ];

  selectedImage: string = this.images[0].src;

  selectImage(imageSrc: string): void {
    this.selectedImage = imageSrc;
  }
}
