import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from '../types/Weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor (private http: HttpClient) { }

  getWeather() {
    return this.http.get<Weather>('https://api-express-server.onrender.com/weather');
  }
}
