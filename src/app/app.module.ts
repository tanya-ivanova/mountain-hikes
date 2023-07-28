import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { WeatherModule } from './weather/weather.module';
import { HikesModule } from './hikes/hikes.module';
import { NotFoundComponent } from './not-found/not-found.component';

import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { ErrorInterceptor } from './error.interceptor';

@NgModule({
    declarations: [
        AppComponent,
        NotFoundComponent,
    ],
    imports: [
        CoreModule,
        SharedModule,
        AuthModule,
        WeatherModule,
        HikesModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorService,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
