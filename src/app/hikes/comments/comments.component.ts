import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
    constructor(
        private authService: AuthService
    ) {}

    get isLogged(): boolean {
        return this.authService.isLogged;
    }
}
