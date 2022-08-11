import { Component, OnInit } from '@angular/core';
import { APIService } from './services/api.service';
import {  IAPIResponse, IError } from './types/api-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private api: APIService) {}
  weather: IAPIResponse | null = null;
  error: IError | null = null;
  defValue= 'dakar'

  doRequest(query: string){
    this.api.getWeather(query)
  }


  ngOnInit(): void {
    this.api.getWeather(this.defValue);
    this.api.observer().subscribe(({ error, weather }) => {

      if (error) {
        this.error = error;
        return;
      }

      if (weather) {
        this.weather = weather;
        this.error = error;
        return;
      }
    });
  }
}
