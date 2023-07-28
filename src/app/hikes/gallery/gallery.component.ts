import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hike } from 'src/app/types/Hike';
import { HikeService } from '../hike.service';

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
        createdAt: '',
        _id: '',
        likes: [],
        comments: [],
        _ownerId: {
            _id: '',
            email: '',
        },
    };

    postId: string = '';

    isLoading = true;

    constructor(
        private route: ActivatedRoute,
        private hikeService: HikeService,
    ) {}

    ngOnInit() {
        //this.post = this.route.snapshot.data['post'];
        this.postId = this.route.snapshot.params['id'];

        this.hikeService.getById(this.postId).subscribe((response) => {
            this.post = response;
            this.isLoading = false;
        });       
    }
}
