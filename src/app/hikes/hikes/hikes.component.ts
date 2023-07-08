import { Component, Input } from '@angular/core';
import { Hike } from 'src/app/types/Hike';

@Component({
  selector: 'app-hikes',
  templateUrl: './hikes.component.html',
  styleUrls: ['./hikes.component.css']
})
export class HikesComponent {
  @Input() posts: Hike[] = [];
  @Input() isLoading: boolean = true;

  @Input() isAllHikes: boolean = false;
  @Input() isMyHikes: boolean = false;
  @Input() isSearchedHikes: boolean = false;
  @Input() isInitial: boolean = true;
}
