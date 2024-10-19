import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GamePageComponent } from './pages/gamepage/gamepage.component';
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
