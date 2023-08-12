import { Component, OnInit } from '@angular/core';
import { Hike } from '../../types/Hike';
import { HikeService } from '../hike.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-all-hikes',
    templateUrl: './all-hikes.component.html',
    styleUrls: ['./all-hikes.component.css']
})
export class AllHikesComponent implements OnInit {
    posts: Hike[] = [];
    isLoading = true;
    isAllHikes = true;
    page: number = 1;
    totalPostsCount: number = 0;
    totalPages: number = 0;
    pageSize = 3;
    navigateTo = '/hikes';
    hasPosts = false;
    

    constructor(
        private hikeService: HikeService,       
        private route: ActivatedRoute,
        ) { }

    ngOnInit() {
        this.route.queryParams
            .subscribe((queryParams) => {
                this.page = Number(queryParams['page']) || 1;

                this.hikeService.getAllPosts(this.page)
                    .subscribe(hikeData => {                        
                        this.posts = hikeData.posts;
                        if(this.posts.length > 0) {
                            this.hasPosts = true
                        } else {
                            this.hasPosts = false;
                        }
                        
                        this.totalPostsCount = hikeData.count;
                        this.totalPages = Math.ceil(this.totalPostsCount / this.pageSize);
                        
                        this.isLoading = false;
                    })                
            })
    }
}
