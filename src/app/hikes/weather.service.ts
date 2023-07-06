import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from '../types/Weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor (private http: HttpClient) { }

  getWeather(latitude: String, longitude: String) {
    return this.http.get<Weather>(`https://api-express-server.onrender.com/weather?latitude=${latitude}&longitude=${longitude}`);
  }
}
