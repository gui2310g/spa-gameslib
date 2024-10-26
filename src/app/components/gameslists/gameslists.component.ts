import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-gameslists',
  templateUrl: './gameslists.component.html',
  styleUrl: './gameslists.component.scss',
  standalone: true,
  imports: [NgClass],
})

export class GamesListsComponent{
    @Input() title: string = '';  
    @Input() description: string = ''; 
    @Input() src: string = '';  
    @Input() alt: string = ''; 
    @Input() isReverse: boolean = true;
}
