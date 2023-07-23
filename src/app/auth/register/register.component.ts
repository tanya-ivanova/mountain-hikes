import { Component } from '@angular/core';
import { Validators, ValidatorFn, AbstractControl, ValidationErrors, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    signupForm = this.fb.group({
        email: ['', [
            Validators.required,
            Validators.email,
        ]
        ],
        password: ['', [
            Validators.required,
            this.passwordValidation(),
        ]
        ],
        repass: ['', [
            Validators.required,
            this.repassValidation(),
        ]
        ]
    });

    isLoading: boolean = false;
    errorMessage: string = '';

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router,
    ) { }

    passwordValidation(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const value = control.value;
            if (!value) {
                return null;
            }

            const passwordIsInvalid = value.length < 5;

            return passwordIsInvalid ? { passwordIsInvalid: true } : null;
        }
    }

    repassValidation(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const value = control.value;
            if (!value) {
                return null;
            }

            const repassIsInvalid = value !== this.signupForm.get('password')?.value;

            return repassIsInvalid ? { repassIsInvalid: true } : null;
        }
    }

    onSubmit() {
        if (!this.signupForm.valid) {
            return;
        }
        this.isLoading = true;
                
        const email = this.signupForm.get('email')?.value;
        const password = this.signupForm.get('password')?.value;

        if(email && password) {
            this.authService.register(email, password).subscribe(
                resData => {
                    this.isLoading = false;            
                    this.router.navigate(['/hikes']);
                },
                error => {
                    this.isLoading = false;
                    this.errorMessage = error.error.message;
                }
            )
        }

        this.signupForm.reset();
    }
}
