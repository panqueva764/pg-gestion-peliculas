import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private readonly API_URL = 'http://www.omdbapi.com/';
  private readonly API_KEY = 'a35f6d77';

  constructor(private http: HttpClient) {}

  searchMovies(query: string): Observable<any> {
    const url = `${this.API_URL}?apikey=${this.API_KEY}&s=${query}`;
    return this.http.get(url);
  }
}
