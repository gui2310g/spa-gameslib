import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { 
  Game, 
  Genres, 
  Platforms, 
  Publishers, 
  Screenshots, 
  Ratings 
} from '../../models/game.model';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private apiUrl = environment.apiUrl;
 
  constructor(private http: HttpClient) {}

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.apiUrl}/games/findAll`);
  }

  getGamesByPagination(page: number, size: number): Observable<Game[]> {
    return this.http.get<Game[]>(
      `${this.apiUrl}/games/findAllByPage?page=${page}&size=${size}`
    );
  }

  getGame(id: number): Observable<Game> {
    return this.http.get<Game>(`${this.apiUrl}/games/find/${id}`);
  }

  getSearchedGame(name: string): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.apiUrl}/games/search?name=${name}`);
  }

  getGenres(): Observable<Genres[]> {
    return this.http.get<Genres[]>(`${this.apiUrl}/genres/findAll`);
  }

  getGenresByPagination(page: number, size: number): Observable<Genres[]> {
    return this.http.get<Genres[]>(
      `${this.apiUrl}/genres/findAllByPage?page=${page}&size=${size}`
    );
  }

  getGenresByGameId(gameId: number): Observable<Genres[]> {
    return this.http.get<Genres[]>(`${this.apiUrl}/genres/game/${gameId}`);
  }

  getPlatforms(): Observable<Platforms[]> {
    return this.http.get<Platforms[]>(`${this.apiUrl}/platforms/findAll`);
  }

  getPlatformsByPagination(
    page: number, 
    size: number
  ): Observable<Platforms[]> {
    return this.http.get<Platforms[]>(
      `${this.apiUrl}/platforms/findAllByPage?page=${page}&size=${size}`
    );
  }

  getPlatformsByGameId(gameId: number): Observable<Platforms[]> {
    return this.http.get<Platforms[]>(`${this.apiUrl}/platforms/game/${gameId}`)
  }

  getPlatformsByGame(
    platformId: number, 
    gameId: number
  ): Observable<Platforms[]> {
    return this.http.get<Platforms[]>(
      `${this.apiUrl}/games/platforms/find/${platformId}/${gameId}`
    );
  }
  
  getPublishers(): Observable<Publishers[]> {
    return this.http.get<Publishers[]>(`${this.apiUrl}/publishers/findAll`
    );
  }

  getPublishersByPagination(
    page: number, 
    size: number
  ): Observable<Publishers[]> {
    return this.http.get<Publishers[]>(
      `${this.apiUrl}/publishers/findAllByPage?page=${page}&size=${size}`
    );
  }

  getPublishersByGameId(gameId: number): Observable<Publishers[]> {
    return this.http.get<Publishers[]>(
      `${this.apiUrl}/publishers/game/${gameId}`
    );
  }

  getScreenshotsByGameId(gameId: number): Observable<Screenshots[]> {
    return this.http.get<Screenshots[]>(
      `${this.apiUrl}/screenshots/game/${gameId}`
    );
  }

  getEsrbRatingByGameId(gameId: number): Observable<Ratings[]> {
    return this.http.get<Ratings[]>(`${this.apiUrl}/ratings/game/${gameId}`);
  }
}
