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

  getGenres(page: number, size: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/genres/findAll?page=${page}&size=${size}`);
  }

  getPlatforms(page: number, size: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/platforms/findAll?page=${page}&size=${size}`);
  }

  getPublishers(page: number, size: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/publishers/findAll?page=${page}&size=${size}`);
  }
    
}
