import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GamePageComponent } from './pages/game/game.component';
import { GamesSearchComponent } from './pages/gamesSearch/gamesSearch.component';

export const routes: Routes = [
  {
    path: '',
    component: GamesSearchComponent,
  },
  {
    path: 'game',
    component: GamePageComponent,
  },
];
