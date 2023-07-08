import { Component, OnInit } from '@angular/core';
import { Hike } from '../../types/Hike';
import { HikeService } from '../hike.service';

@Component({
  selector: 'app-all-hikes',
  templateUrl: './all-hikes.component.html',
  styleUrls: ['./all-hikes.component.css']
})
export class AllHikesComponent implements OnInit {
  posts: Hike[] = [];
  isLoading = true;
  isAllHikes = true;

  constructor(private hikeService: HikeService) {}

  ngOnInit() {    
    this.hikeService.getAllPosts()
      .subscribe(posts => { 
        console.log(posts);       
        this.posts = posts;
        this.isLoading = false;
      })
  }
}
