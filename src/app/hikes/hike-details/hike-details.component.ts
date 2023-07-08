import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { CurrentWeather, ForecastWeather } from '../../types/Weather';
import { ActivatedRoute } from '@angular/router';
import { Hike } from 'src/app/types/Hike';
import { AuthService } from 'src/app/auth.service';

@Component({
    selector: 'app-hike-details',
    templateUrl: './hike-details.component.html',
    styleUrls: ['./hike-details.component.css'],
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

    post: Hike = {
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
        _ownerId: {
            email: ''
        },
    };

    isLoading = true;

    constructor(
        private weatherService: WeatherService,
        private route: ActivatedRoute,
        private authService: AuthService,
    ) { }

    get isLogged(): boolean {
        return this.authService.isLogged;
    }

    ngOnInit() {
        this.post = this.route.snapshot.data['post'];

        this.weatherService.getWeather(this.post.latitude, this.post.longitude).subscribe(weather => {
            this.currentWeather = weather.currentWeather;
            this.forecastWeather = weather.forecastWeather;
        }); 
        this.isLoading = false;       
    }
}
