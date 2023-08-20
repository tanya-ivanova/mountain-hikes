import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError } from "rxjs";
import { ErrorService } from "./error.service";


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        private errorService: ErrorService,
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {        
        return next.handle(req).pipe(
            catchError((error) => {                
                this.errorService.setError(error);                    
                return [error];
            })
        );
    }
}
