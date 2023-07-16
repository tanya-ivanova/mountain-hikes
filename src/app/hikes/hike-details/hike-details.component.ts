import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherService } from '../weather.service';
import { CurrentWeather, ForecastWeather } from '../../types/Weather';
import { ActivatedRoute } from '@angular/router';
import { Hike } from 'src/app/types/Hike';
import { AuthService } from 'src/app/auth/auth.service';
import { HikeService } from '../hike.service';
import { Comment } from 'src/app/types/Comment';

@Component({
    selector: 'app-hike-details',
    templateUrl: './hike-details.component.html',
    styleUrls: ['./hike-details.component.css'],
})
export class HikeDetailsComponent implements OnInit, OnDestroy {
    private userSub: Subscription | undefined;
    isLogged: boolean = false;
    userId: string = '';
    isOwner: boolean = false;

    comments: Comment[] = [];

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
        comments: [],
        _ownerId: {
            _id: '',
            email: '',
        },
    };

    isLoading = true;

    postId = '';

    hasLiked: boolean = false;
    totalLikes: number = 0;

    constructor(
        private weatherService: WeatherService,
        private route: ActivatedRoute,
        private authService: AuthService,
        private hikeService: HikeService,
    ) { }


    ngOnInit() {
        this.userSub = this.authService.user.subscribe(user => {
            this.isLogged = !!user.accessToken;
            this.userId = user._id;           
        });

        this.post = this.route.snapshot.data['post'];       
        this.totalLikes = this.post.likes.length;
        if (this.post.likes.includes(this.userId)) {
            this.hasLiked = true;
        }
        if (this.post._ownerId._id === this.userId) {
            this.isOwner = true;
        }

        this.weatherService.getWeather(this.post.latitude, this.post.longitude).subscribe(weather => {
            this.currentWeather = weather.currentWeather;
            this.forecastWeather = weather.forecastWeather;
        });
        this.isLoading = false;

        this.postId = this.route.snapshot.params['id'];
    }

    onLike() {
        this.hikeService.like(this.postId).subscribe(() => {
            this.hasLiked = true;
            this.totalLikes++;
        });
    }

    onCommentAdd(isCommentAdded: boolean) {
        if(isCommentAdded) {
            this.hikeService.getById(this.postId).subscribe(hike => {
                this.comments = hike.comments;               
            })
        }
    }

    ngOnDestroy() {
        this.userSub?.unsubscribe();
    }
}
