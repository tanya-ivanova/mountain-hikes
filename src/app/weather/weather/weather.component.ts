import { Component, Input } from '@angular/core';
import { CurrentWeather, ForecastWeather } from '../../types/Weather';
import { Hike } from 'src/app/types/Hike';

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

    @Input() errorInWeatherService: string = '';

    @Input() post: Hike = {
        name: '',
        mountain: '',
        country: '',
        duration: '',
        description: '',
        latitude: '',
        longitude: '',
        photos: [],
        _id: '',
        likes: [],
        comments: [],
        _ownerId: {
            _id: '',
            email: '',
        },
    };
}
