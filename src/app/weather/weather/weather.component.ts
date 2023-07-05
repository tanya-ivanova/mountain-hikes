import { Component, Input } from '@angular/core';
import { CurrentWeather, ForecastWeather } from '../../types/Weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  @Input() currentWeather: CurrentWeather = {
    temp: 0,
    text: '',
    code: 0,
    photo: 0,
    date: ''
  };

  @Input() forecastWeather: ForecastWeather[] = [];
}
