import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChuckNorrisService {
  url = 'https://api.chucknorris.io/jokes';
  constructor(private http: HttpClient) {}

  getCategories(): Observable<any> {
    return this.http.get(`${this.url}/categories`);
  }

  getRandom(category?): Observable<any> {
    return this.http.get(`${this.url}/random`, { params: category ? { category } : {} });
  }

  search(query): Observable<any> {
    return this.http.get(`${this.url}/search`, { params: { query } });
  }
}
