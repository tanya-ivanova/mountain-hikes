import { Component, OnInit } from '@angular/core';
import { Post } from '../../types/Post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-all-hikes',
  templateUrl: './all-hikes.component.html',
  styleUrls: ['./all-hikes.component.css']
})
export class AllHikesComponent implements OnInit {
  posts: Post[] = [];
  isLoading = true;

  constructor(public postService: PostService) {}

  ngOnInit() {    
    this.postService.getAllPosts()
      .subscribe(posts => { 
        console.log(posts);       
        this.posts = posts;
        this.isLoading = false;
      })
  }
}
