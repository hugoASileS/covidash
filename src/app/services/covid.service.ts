import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CovidService {
  url = 'https://covid19-api.weedmark.systems/api/v1/stats';
  constructor(private http: HttpClient) {}

  getCountry(): Observable<any> {
    return this.http
      .get(`${environment.ipRegistry.url}`, { params: { key: environment.ipRegistry.apiKey } })
      .pipe(shareReplay(1));
  }

  getCovidInfo(country): Observable<any> {
    return this.http.get(this.url, { params: { country } });
  }
}
