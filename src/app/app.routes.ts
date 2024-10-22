import { Routes } from '@angular/router';
import { GamePageComponent } from './pages/gamepage/gamepage.component';
import { GamesSearchComponent } from './pages/gamesSearch/gamesSearch.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'search',
    component: GamesSearchComponent
  },
  {
    path: 'game',
    component: GamePageComponent
  },
];
