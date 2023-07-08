import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    constructor(
        private authService: AuthService,
        private router: Router,
    ) {}

    get isLogged(): boolean {
        return this.authService.isLogged;
    }

    get email(): string {
        return this.authService.user?.email || '';
    }

    logout(): void {
        this.authService.logout();
        this.router.navigate(['/']);
    }
}
