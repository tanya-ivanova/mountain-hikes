import { Component, Input } from '@angular/core';
import { Hike } from '../../types/Hike';

@Component({
  selector: 'app-hike',
  templateUrl: './hike.component.html',
  styleUrls: ['./hike.component.css']
})
export class HikeComponent {
  @Input() post: Hike = {
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
    comments: [],
    _ownerId: {
      _id: '',
      email: '',
    },
  };
}
