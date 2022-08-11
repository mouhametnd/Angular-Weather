import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { API_KEY } from '../../API_KEYS';
import { IAPIResponse, IResponse } from '../types/api-response';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(private _http: HttpClient) {}
  behavSubject = new BehaviorSubject<IResponse>({ error: null, weather: null });

  getWeather(query: string) {
    const options = {
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      },
      params: {
        q: query,
      },
    };

    this._http
      .get<IAPIResponse>(
        `https://weatherapi-com.p.rapidapi.com/current.json?`,
        options
      )
      .subscribe({
        error: ({ error }) => {
          this.behavSubject.next({ error: error?.error, weather: null });
        },
        next: (weather) => {
          this.behavSubject.next({ error: null, weather });
        },
      });
  }

  observer() {
    return this.behavSubject;
  }
}
