import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';

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
    
    onSubmit() {
        if (!this.signinForm.valid) {
            return;
        }        

        const email = this.signinForm.get('email')?.value;
        const password = this.signinForm.get('password')?.value;

        if(email && password) {
            this.authService.login(email, password).subscribe(resData => {                
                this.router.navigate(['/hikes']);
            })
        }        
    }
}
