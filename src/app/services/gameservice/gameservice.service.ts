import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getGames(page: number, size: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/games/findAll?page=${page}&size=${size}`);
  }

  getGame(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/games/find/${id}`)
  }

  getGenres(page: number, size: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/genres/findAll?page=${page}&size=${size}`);
  }

  getGenresByGameId(gameId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/genres/game/${gameId}`)
  }
  
  getPlatforms(page: number, size: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/platforms/findAll?page=${page}&size=${size}`);
  }

  getPlatformsByGameId(gameId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/platforms/game/${gameId}`)
  }
  
  getPlatformsByGame(platformId: number, gameId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/games/platforms/find/${platformId}/${gameId}`)
  }
  getPublishers(page: number, size: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/publishers/findAll?page=${page}&size=${size}`);
  }
    
  getPublishersByGameId(gameId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/publishers/game/${gameId}`)
  }

  getScreenshotsByGameId(gameId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/screenshots/game/${gameId}`)
  }
  
  getEsrbRatingByGameId(gameId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/ratings/game/${gameId}`)
  }
}
