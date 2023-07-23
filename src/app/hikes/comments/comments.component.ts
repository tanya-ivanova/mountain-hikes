import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Comment } from 'src/app/types/Comment';
import { Hike } from 'src/app/types/Hike';


@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit, OnChanges {
    private userSub: Subscription | undefined;
    isLogged: boolean = false;
    userId: string = '';
    isOwner: boolean = false;  
    
    @Input() comments: Comment[] = [];
    
    @Output() onNewCommentAdd = new EventEmitter<boolean>;

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
        comments: [],
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
            this.isLogged = !!user;
            this.userId = user?._id || '';           
        });

        this.post = this.route.snapshot.data['post'];
        this.comments = this.post.comments;

        if(this.post._ownerId._id === this.userId) {
            this.isOwner = true;
        }        
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
    }

    onCommentAdd(isCommentAdded: boolean) {
        this.onNewCommentAdd.emit(isCommentAdded);
    }

    ngOnDestroy() {
        this.userSub?.unsubscribe();
    }
}
