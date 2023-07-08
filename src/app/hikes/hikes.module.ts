import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { AllHikesComponent } from './all-hikes/all-hikes.component';
import { CommentsComponent } from './comments/comments.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HikeComponent } from './hike/hike.component';
import { HikeDetailsComponent } from './hike-details/hike-details.component';
import { LikesComponent } from './likes/likes.component';
import { MyHikesComponent } from './my-hikes/my-hikes.component';
import { SearchComponent } from './search/search.component';
import { WeatherModule } from '../weather/weather.module';
import { HikeService } from './hike.service';
import { WeatherService } from './weather.service';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { HikesComponent } from './hikes/hikes.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddCommentComponent,
    AllHikesComponent,
    CommentsComponent,
    CreatePostComponent,
    EditPostComponent,
    GalleryComponent,
    HikeComponent,
    HikeDetailsComponent,
    LikesComponent,
    MyHikesComponent,
    SearchComponent,
    HikesComponent,
  ],
  imports: [
    CommonModule,
    WeatherModule,
    SharedModule,    
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    AddCommentComponent,
    AllHikesComponent,
    CommentsComponent,
    CreatePostComponent,
    EditPostComponent,
    GalleryComponent,
    HikeComponent,
    HikeDetailsComponent,
    LikesComponent,
    MyHikesComponent,
    SearchComponent,
  ],
  providers: [
    HikeService,
    WeatherService,
  ]
})
export class HikesModule { }
