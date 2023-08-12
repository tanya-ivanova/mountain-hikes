import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

import { User } from './user.model';

export interface AuthResponseData {
    _id: string;
    email: string;
    accessToken: string;
    expiresIn: number,
    expirationDate: Date,
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    private user$$ = new BehaviorSubject<User | null>(null);
    user$ = this.user$$.asObservable();

    private tokenExpirationTimer: any;

    constructor(private http: HttpClient, private router: Router) { }

    register(email: string, password: string, repass: string) {
        return this.http
            .post<AuthResponseData>(
                'https://api-express-server.onrender.com/users/register',
                {
                    email,
                    password,
                    repass
                }
            )
            .pipe(
                tap(resData => {
                    this.handleAuthentication(
                        resData.email,
                        resData._id,
                        resData.accessToken,                        
                        resData.expirationDate,
                        resData.expiresIn
                    );
                })
            );
    }

    login(email: string, password: string) {
        return this.http
            .post<AuthResponseData>(
                'https://api-express-server.onrender.com/users/login',
                {
                    email,
                    password,
                }
            )
            .pipe(
                tap(resData => {
                    this.handleAuthentication(
                        resData.email,
                        resData._id,
                        resData.accessToken,                        
                        resData.expirationDate,
                        resData.expiresIn
                    );
                })
            );
    }

    autoLogin() {
        const userData: {
            email: string;
            _id: string;
            _accessToken: string;
            _accessTokenExpirationDate: string;
            expiresIn: number
        } = JSON.parse(localStorage.getItem('userData') || '');
        if (!userData) {
            return;
        }

        const loadedUser = new User(
            userData.email,
            userData._id,
            userData._accessToken,
            new Date(userData._accessTokenExpirationDate),
            userData.expiresIn
        );

        if (loadedUser) {
            this.user$$.next(loadedUser);

            const expirationDuration = new Date(userData._accessTokenExpirationDate).getTime() - new Date().getTime();
            this.autoLogout(expirationDuration);
        }
    }

    logout() {
        this.user$$.next(null);
        this.router.navigate(['/']);
        localStorage.removeItem('userData');

        if (this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer = null;
    }

    autoLogout(expirationDuration: number) {
        this.tokenExpirationTimer = setTimeout(() => {
            this.logout();
        }, expirationDuration);
    }

    private handleAuthentication(
        email: string,
        _id: string,
        _accessToken: string,        
        _accessTokenExpirationDate: Date,
        expiresIn: number
    ) {
        const user = new User(email, _id, _accessToken, _accessTokenExpirationDate, expiresIn);
        this.user$$.next(user);

        this.autoLogout(expiresIn * 1000);

        localStorage.setItem('userData', JSON.stringify(user));
    }
}
