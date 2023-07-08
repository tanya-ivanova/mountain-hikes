import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    constructor(
        private authService: AuthService,
        private router: Router,
    ) {}

    login(email: string, password: string): void {
        this.authService.login();
        this.router.navigate(['/hikes']);
    }
}
