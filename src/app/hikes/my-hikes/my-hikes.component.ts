import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Hike } from '../../types/Hike';
import { HikeService } from '../hike.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
    selector: 'app-my-hikes',
    templateUrl: './my-hikes.component.html',
    styleUrls: ['./my-hikes.component.css']
})
export class MyHikesComponent implements OnInit, OnDestroy {
    private userSub: Subscription | undefined;
    userId = '';
    posts: Hike[] = [];
    isLoading = true;
    isMyHikes = true;

    constructor(
        private hikeService: HikeService,
        private authService: AuthService,
    ) { }

    ngOnInit() {
        this.userSub = this.authService.user.subscribe(user => {            
            this.userId = user._id;          
            
        });

        this.hikeService.getPostsByUserId(this.userId)
            .subscribe(posts => {
                console.log(posts);
                this.posts = posts;
                this.isLoading = false;
            })
    }

    ngOnDestroy() {
        this.userSub?.unsubscribe();
    }
}
