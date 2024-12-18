import { Routes } from '@angular/router';
import { GamePageComponent } from './pages/gamepage/gamepage.component';
import { GamesSearchComponent } from './pages/gamesSearch/gamesSearch.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SearchedGamesComponent } from './pages/searched-games/searched-games.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'search',
    component: SearchedGamesComponent
  },
  {
    path: 'games',
    component: GamesSearchComponent
  },
  {
    path: 'game/:id',
    component: GamePageComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login',
    component: SigninComponent
  }
];
