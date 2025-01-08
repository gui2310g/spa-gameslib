import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class GameService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getGames(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/games/findAll`);
  }

  getGamesByPagination(page: number, size: number): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/games/findAllByPage?page=${page}&size=${size}`
    );
  }

  getGame(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/games/find/${id}`);
  }

  getSearchedGame(name: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/games/search?name=${name}`);
  }

  getGenres(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/genres/findAll`);
  }

  getGenresByPagination(page: number, size: number): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/genres/findAllByPage?page=${page}&size=${size}`
    );
  }

  getGenresByGameId(gameId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/genres/game/${gameId}`);
  }

  getPlatforms(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/platforms/findAll`);
  }

  getPlatformsByPagination(page: number, size: number): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/platforms/findAllByPage?page=${page}&size=${size}`
    );
  }

  getPlatformsByGameId(gameId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/platforms/game/${gameId}`);
  }

  getPlatformsByGame(platformId: number, gameId: number): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/games/platforms/find/${platformId}/${gameId}`
    );
  }
  
  getPublishers(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/publishers/findAll`
    );
  }

  getPublishersByPagination(page: number, size: number): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/publishers/findAllByPage?page=${page}&size=${size}`
    );
  }

  getPublishersByGameId(gameId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/publishers/game/${gameId}`);
  }

  getScreenshotsByGameId(gameId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/screenshots/game/${gameId}`);
  }

  getEsrbRatingByGameId(gameId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/ratings/game/${gameId}`);
  }
}
