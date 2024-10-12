import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GamePageComponent } from './features/game/game.component';
import { GamesSearchComponent } from './features/gamesSearch/gamespage.component';

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
