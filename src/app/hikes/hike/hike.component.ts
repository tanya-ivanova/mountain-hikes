import { Component, Input } from '@angular/core';
import { Post } from '../../types/Post';

@Component({
  selector: 'app-hike',
  templateUrl: './hike.component.html',
  styleUrls: ['./hike.component.css']
})
export class HikeComponent {
  @Input() post: Post = {
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
    _ownerId: {
      email: ''
    },
  };
}
