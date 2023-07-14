import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
    private userSub: Subscription | undefined;
    isLogged: boolean = false;

    constructor(
        private authService: AuthService
    ) {}

    ngOnInit() {
        this.userSub = this.authService.user.subscribe(user => {
            this.isLogged = !!user.accessToken;           
        });
    }

    ngOnDestroy() {
        this.userSub?.unsubscribe();
    }
}
