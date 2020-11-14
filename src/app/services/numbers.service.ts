import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NumbersService {
  url = 'http://numbersapi.com';
  constructor(private http: HttpClient) {}

  getNumber(url): Observable<any> {
    return this.http.get(`${this.url}/${url}?json`);
  }
}
