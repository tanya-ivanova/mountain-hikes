import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WeatherService } from '../weather.service';
import { weatherConditions } from '../weather_conditions';
import { CurrentWeather, ForecastWeather } from '../types/Weather';
import tt from '@tomtom-international/web-sdk-maps';

@Component({
  selector: 'app-hike-details',
  templateUrl: './hike-details.component.html',
  styleUrls: ['./hike-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HikeDetailsComponent implements OnInit {
  currentWeather: CurrentWeather = {
    temp: 0,
    text: '',
    code: 0,
    photo: 0,
    date: ''
  };

  forecastWeather: ForecastWeather[] = [];

  constructor (public weatherService: WeatherService) {}

  ngOnInit () {
    const map = tt.map({
      key: 'jCcpht8Igo9gAxQI97mUdla41kQBuBL7',
      container: 'map',
      center: [11.85, 46.43],
      zoom: 8
    })
    map.addControl(new tt.NavigationControl())

    const marker = new tt.Marker().setLngLat([11.85, 46.43]).addTo(map);
    
    this.weatherService.getCurrentWeather().subscribe(weather => {    
      this.currentWeather.temp = weather.current.temp_c;
      this.currentWeather.text = weather.current.condition.text;
      this.currentWeather.code = weather.current.condition.code;
      const matchedCondition = weatherConditions.find(obj => obj.code === this.currentWeather.code);
      this.currentWeather.photo = matchedCondition?.icon || 0;
      const date = weather.forecast.forecastday[0].date;
      const currentDate = new Date(date);
      this.currentWeather.date = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;

      weather.forecast.forecastday.forEach((el: any) => {
        const forcastDay: ForecastWeather = {
          minTemp: 0,
          maxTemp: 0,
          text: '',
          code: 0,
          photo: 0,
          date: ''
        };
        const dateString = el.date;
        const date = new Date(dateString);        
        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        
        forcastDay.date = formattedDate;
        forcastDay.minTemp = el.day.mintemp_c;
        forcastDay.maxTemp = el.day.maxtemp_c;
        forcastDay.text = el.day.condition.text;
        forcastDay.code = el.day.condition.code;

        const matchedCondition = weatherConditions.find(obj => obj.code === forcastDay.code);
        forcastDay.photo = matchedCondition?.icon || 0;

        this.forecastWeather.push(forcastDay);
      });
    })
  }
}
