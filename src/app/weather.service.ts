import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor (private http: HttpClient) { }

  getWeather() {
    return this.http.get<any>('https://api-express-server.onrender.com/weather');
  }
}
