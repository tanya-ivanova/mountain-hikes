import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ErrorService } from 'src/app/shared/error/error.service';

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

    isLoading: boolean = false;
    apiError = '';

    constructor(
        private authService: AuthService,
        private router: Router,
        private fb: FormBuilder,
        private errorService: ErrorService,
    ) {}
    
    onSubmit() {
        if (!this.signinForm.valid) {
            return;
        } 
        this.errorService.removeError();
        this.errorService.apiError$.subscribe((err) => {
            this.apiError = err || '';            
        });
        
        this.isLoading = true;       

        const email = this.signinForm.get('email')?.value;
        const password = this.signinForm.get('password')?.value;

        if(email && password) {
            this.authService.login(email, password).subscribe({
                next: (resData) => {
                    this.isLoading = false;                
                    this.router.navigate(['/hikes']);
                }, 
                complete: () => {
                    this.isLoading = false;                                      
                }}
            );
        } 
        
        this.signinForm.reset();
    }
}
