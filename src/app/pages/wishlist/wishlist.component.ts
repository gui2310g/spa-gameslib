import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { Game } from '../../models/game.model';
import { GameService } from '../../services/gameservice/gameservice.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent implements OnInit {
  user!: User | undefined;
  games: Game[] = [];

  constructor(private gameService: GameService) {}
  
  ngOnInit(): void {
    this.UserStatus();
    this.WishlistGames();
  }

  WishlistGames(): void {
    this.gameService.getWishlistGames().subscribe({
      next: (data) => this.games = data
    })
  }

  UserStatus() {
    const token = sessionStorage.getItem('token');
    if(token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      this.user = { 
        username: payload.sub,
        email: '',
        password: ''
      } 
    }
  }

}
