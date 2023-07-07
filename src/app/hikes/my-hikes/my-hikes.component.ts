import { Component, OnInit } from '@angular/core';
import { Post } from '../../types/Post';
import { PostService } from '../post.service';

@Component({
    selector: 'app-my-hikes',
    templateUrl: './my-hikes.component.html',
    styleUrls: ['./my-hikes.component.css']
})
export class MyHikesComponent implements OnInit {
    posts: Post[] = [];
    isLoading = true;

    constructor(private postService: PostService) { }

    ngOnInit() {
        this.postService.getPostsByUserId()
            .subscribe(posts => {
                console.log(posts);
                this.posts = posts;
                this.isLoading = false;
            })
    }
}
