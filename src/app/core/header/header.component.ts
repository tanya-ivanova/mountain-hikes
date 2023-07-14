import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
    private userSub: Subscription | undefined;
    isLogged: boolean = false;
    email: string = '';

    constructor(
        private authService: AuthService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.userSub = this.authService.user.subscribe(user => {            
            this.isLogged = !!user.accessToken;
            this.email = user.email;
        });
    }

    logout(): void {
        this.authService.logout();
        this.router.navigate(['/']);
    }

    ngOnDestroy() {
        this.userSub?.unsubscribe();
    }
}
