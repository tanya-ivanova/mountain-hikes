import { Component } from '@angular/core';
import { Validators, ValidatorFn, AbstractControl, ValidationErrors, FormBuilder } from '@angular/forms';

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

    constructor(private fb: FormBuilder) { }

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
        console.log(this.signupForm.get('email')?.value);
        console.log(this.signupForm.get('password')?.value);

        const email = this.signupForm.get('email')?.value;
        const password = this.signupForm.get('password')?.value;
    }
}
