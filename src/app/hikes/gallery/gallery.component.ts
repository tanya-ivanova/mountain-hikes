import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hike } from 'src/app/types/Hike';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
    post: Hike = {
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

    isLoading = true;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.post = this.route.snapshot.data['post'];         
        this.isLoading = false;       
    }
}
