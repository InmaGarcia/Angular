import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Serie } from '../model/serie';

@Injectable({
  providedIn: 'root',
})
export class SerieService {
  private url = 'https://api.tvmaze.com/shows/5';
  constructor(private http: HttpClient) {}

  getSerie() {
    return this.http.get<Serie>(this.url);
  }
}
