import { Component, OnInit } from '@angular/core';
import { Hike } from '../../types/Hike';
import { HikeService } from '../hike.service';

@Component({
    selector: 'app-my-hikes',
    templateUrl: './my-hikes.component.html',
    styleUrls: ['./my-hikes.component.css']
})
export class MyHikesComponent implements OnInit {
    posts: Hike[] = [];
    isLoading = true;

    constructor(private hikeService: HikeService) { }

    ngOnInit() {
        this.hikeService.getPostsByUserId()
            .subscribe(posts => {
                console.log(posts);
                this.posts = posts;
                this.isLoading = false;
            })
    }
}
