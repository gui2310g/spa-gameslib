import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-gameslists',
  templateUrl: './gamelist.component.html',
  styleUrl: './gamelist.component.scss',
  standalone: true,
  imports: [NgClass],
})

export class GameListComponent{
    @Input() title: string = '';  
    @Input() description: string = ''; 
    @Input() src: string = '';  
    @Input() alt: string = ''; 
    @Input() isReverse: boolean = true;
}
