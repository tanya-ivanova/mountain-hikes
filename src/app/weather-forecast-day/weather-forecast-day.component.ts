import { Component, Input } from '@angular/core'
import { ForecastWeather } from '../types/Weather'

@Component({
  selector: 'app-weather-forecast-day',
  templateUrl: './weather-forecast-day.component.html',
  styleUrls: ['./weather-forecast-day.component.css']
})
export class WeatherForecastDayComponent {
  @Input() forecastDay: ForecastWeather = {
    minTemp: 0,
    maxTemp: 0,
    text: '',
    code: 0,
    photo: 0,
    date: ''
  }
}
