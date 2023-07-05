import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HikeComponent } from './hike/hike.component';
import { AllHikesComponent } from './all-hikes/all-hikes.component';
import { HikeDetailsComponent } from './hike-details/hike-details.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PostService } from './post.service';
import { WeatherService } from './weather.service';
import { WeatherComponent } from './weather/weather.component';
import { WeatherForecastDayComponent } from './weather-forecast-day/weather-forecast-day.component';
import { SearchComponent } from './search/search.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { LikesComponent } from './likes/likes.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { CommentsComponent } from './comments/comments.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { MyHikesComponent } from './my-hikes/my-hikes.component';

@NgModule({
  declarations: [
    AppComponent,      
    HikeComponent,
    AllHikesComponent,
    HikeDetailsComponent,    
    CreatePostComponent,
    GalleryComponent,
    WeatherComponent,
    WeatherForecastDayComponent,    
    SearchComponent, 
    LikesComponent, EditPostComponent, CommentsComponent, AddCommentComponent, MyHikesComponent,
  ],
  imports: [
    CoreModule,
    SharedModule,
    AuthModule,
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
