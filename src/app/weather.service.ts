import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor (private http: HttpClient) { }

  getCurrentWeather() {
    return this.http.get<any>('http://api.weatherapi.com/v1/forecast.json?key=795b320e04e64bbb9aa42005232906&q=46.43,11.85&days=3');
  }
}
