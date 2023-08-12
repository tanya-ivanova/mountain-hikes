import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Hike } from '../../types/Hike';
import { HikeService } from '../hike.service';
import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute } from '@angular/router';

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
    page: number = 1;
    totalPostsCount: number = 0;
    totalPages: number = 0;
    pageSize = 3;
    navigateTo = '/my-hikes';
    hasPosts = false;

    constructor(
        private hikeService: HikeService,
        private authService: AuthService,
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.userSub = this.authService.user$.subscribe(user => {
            this.userId = user?._id || '';

        });

        this.route.queryParams
            .subscribe((queryParams) => {
                this.page = Number(queryParams['page']) || 1;

                this.hikeService.getPostsByUserId(this.userId, this.page)
                    .subscribe(hikeData => {
                        this.posts = hikeData.posts;
                        if(this.posts.length > 0) {
                            this.hasPosts = true;
                        } else {
                            this.hasPosts = false;
                        }
                        
                        this.totalPostsCount = hikeData.count;
                        this.totalPages = Math.ceil(this.totalPostsCount / this.pageSize);

                        this.isLoading = false;
                    })
            })
    }

    ngOnDestroy() {
        this.userSub?.unsubscribe();
    }
}
