import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

import { User } from './user.model';

export interface AuthResponseData {
    _id: string;
    email: string;
    accessToken: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    user = new BehaviorSubject<User | null>(null);    

    constructor(private http: HttpClient, private router: Router) { }

    register(email: string, password: string) {
        return this.http
            .post<AuthResponseData>(
                'https://api-express-server.onrender.com/users/register',
                {
                    email: email,
                    password: password,                    
                }
            )
            .pipe(                
                tap(resData => {
                    this.handleAuthentication(
                        resData.email,
                        resData._id,
                        resData.accessToken,                        
                    );
                })
            );
    }

    login(email: string, password: string) {
        return this.http
            .post<AuthResponseData>(
                'https://api-express-server.onrender.com/users/login',
                {
                    email: email,
                    password: password,                
                }
            )
            .pipe(                
                tap(resData => {
                    this.handleAuthentication(
                        resData.email,
                        resData._id,
                        resData.accessToken,                        
                    );
                })
            );
    }

    autoLogin() {
        const userData: {
            email: string;
            _id: string;
            accessToken: string;           
        } = JSON.parse(localStorage.getItem('userData') || '');
        if (!userData) {
            return;
        }

        const loadedUser = new User(
            userData.email,
            userData._id,
            userData.accessToken,            
        );

        if (loadedUser.accessToken) {
            this.user.next(loadedUser);            
        }
    }

    logout() {
        this.user.next(null);
        this.router.navigate(['/']);
        localStorage.removeItem('userData');        
    }    

    private handleAuthentication(
        email: string,
        _id: string,
        accessToken: string        
    ) {        
        const user = new User(email, _id, accessToken);
        this.user.next(user);              
        localStorage.setItem('userData', JSON.stringify(user));
    }   
}
