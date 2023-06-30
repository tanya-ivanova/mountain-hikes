import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HikeComponent } from './hike/hike.component';
import { AllHikesComponent } from './all-hikes/all-hikes.component';
import { HikeDetailsComponent } from './hike-details/hike-details.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PostService } from './post.service';
import { WeatherService } from './weather.service';
import { WeatherComponent } from './weather/weather.component';
import { WeatherForecastDayComponent } from './weather-forecast-day/weather-forecast-day.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HikeComponent,
    AllHikesComponent,
    HikeDetailsComponent,
    RegisterComponent,
    LoginComponent,
    CreatePostComponent,
    GalleryComponent,
    WeatherComponent,
    WeatherForecastDayComponent,
    SpinnerComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PostService,
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
