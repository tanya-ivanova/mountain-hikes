import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherService } from '../weather.service';
import { CurrentWeather, ForecastWeather } from '../../types/Weather';
import { ActivatedRoute } from '@angular/router';
import { Hike } from 'src/app/types/Hike';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
    selector: 'app-hike-details',
    templateUrl: './hike-details.component.html',
    styleUrls: ['./hike-details.component.css'],
})
export class HikeDetailsComponent implements OnInit, OnDestroy {
    private userSub: Subscription | undefined;
    isLogged: boolean = false;

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
            _id: '',
            email: '',
        },
    };

    isLoading = true;

    postId = '';

    constructor(
        private weatherService: WeatherService,
        private route: ActivatedRoute,
        private authService: AuthService,
    ) { }


    ngOnInit() {
        this.userSub = this.authService.user.subscribe(user => {
            this.isLogged = !!user.accessToken;            
        });

        this.post = this.route.snapshot.data['post'];

        this.weatherService.getWeather(this.post.latitude, this.post.longitude).subscribe(weather => {
            this.currentWeather = weather.currentWeather;
            this.forecastWeather = weather.forecastWeather;
        }); 
        this.isLoading = false;
        
        this.postId = this.route.snapshot.params['id'];
    }

    ngOnDestroy() {
        this.userSub?.unsubscribe();
    }
}
