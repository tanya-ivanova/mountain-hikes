import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Hike } from 'src/app/types/Hike';


@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
    private userSub: Subscription | undefined;
    isLogged: boolean = false;
    userId: string = '';
    isOwner: boolean = false;

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
            _id: '',
            email: '',
        },
    };

    constructor(
        private authService: AuthService,
        private route: ActivatedRoute,
    ) {}

    ngOnInit() {
        this.userSub = this.authService.user.subscribe(user => {
            this.isLogged = !!user.accessToken;
            this.userId = user._id;           
        });

        this.post = this.route.snapshot.data['post'];

        if(this.post._ownerId._id === this.userId) {
            this.isOwner = true;
        }
    }

    ngOnDestroy() {
        this.userSub?.unsubscribe();
    }
}
