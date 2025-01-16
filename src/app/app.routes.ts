import { Routes } from '@angular/router';
import { GamePageComponent } from './pages/gamepage/gamepage.component';
import { GamesSearchComponent } from './pages/gamesSearch/gamesSearch.component'
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SearchGamesComponent } from './pages/searchGames/searchGames.component'
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    data: { showNavFooter: true }
  },
  {
    path: 'search',
    component: SearchGamesComponent,
    data: { showNavFooter: true }
  },
  {
    path: 'games',
    component: GamesSearchComponent,
    data: { showNavFooter: true }
  },
  {
    path: 'game/:id',
    component: GamePageComponent,
    data: { showNavFooter: true }
  },
  {
    path: 'signup',
    component: SignupComponent,
    data: { showNavFooter: false }
  },
  {
    path: 'login',
    component: SigninComponent,
    data: { showNavFooter: false }
  },
  {
    path: 'wishlist',
    component: WishlistComponent,
    data: { showNavFooter: true }
  }
];