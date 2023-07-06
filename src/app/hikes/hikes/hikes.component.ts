import { Component, Input } from '@angular/core';
import { Post } from 'src/app/types/Post';

@Component({
  selector: 'app-hikes',
  templateUrl: './hikes.component.html',
  styleUrls: ['./hikes.component.css']
})
export class HikesComponent {
  @Input() posts: Post[] = [];
  @Input() isLoading: boolean = true;

  isAllHikes: boolean = true;
  isMyHikes: boolean = false;
  isSearchedHikes: boolean = false;
}
