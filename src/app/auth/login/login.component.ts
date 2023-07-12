import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, ValidatorFn, AbstractControl, ValidationErrors, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    signinForm = this.fb.group({
        email: ['', [
            Validators.required,
            Validators.email,
        ]
        ],
        password: ['', [
            Validators.required,
        ]
        ],        
    });

    constructor(
        private authService: AuthService,
        private router: Router,
        private fb: FormBuilder
    ) {}

    login(email: string, password: string): void {
        this.authService.login();
        this.router.navigate(['/hikes']);
    }

    onSubmit() {
        console.log(this.signinForm.get('email')?.value);
        console.log(this.signinForm.get('password')?.value);

        const email = this.signinForm.get('email')?.value;
        const password = this.signinForm.get('password')?.value;

        if(email && password) {
            this.login(email, password);
        }        
    }
}
