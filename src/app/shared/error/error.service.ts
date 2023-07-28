import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ErrorService {
    private apiError$$ = new BehaviorSubject(null);
    apiError$ = this.apiError$$.asObservable();

    constructor() { }

    setError(error: any): void {
        this.apiError$$.next(error);
    }

    removeError() {
        this.apiError$$.next(null);
    }
}
