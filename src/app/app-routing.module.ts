import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AllHikesComponent } from './hikes/all-hikes/all-hikes.component';
import { MyHikesComponent } from './hikes/my-hikes/my-hikes.component';
import { CreatePostComponent } from './hikes/create-post/create-post.component';
import { SearchComponent } from './hikes/search/search.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HikeDetailsResolver } from './hikes/hike-details/hike-details.resolver';
import { HikeDetailsComponent } from './hikes/hike-details/hike-details.component';
import { GalleryComponent } from './hikes/gallery/gallery.component';
import { EditPostComponent } from './hikes/edit-post/edit-post.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'hikes', component: AllHikesComponent },
    { 
        path: 'my-hikes', 
        component: MyHikesComponent,
        canActivate: [AuthGuard], 
    },
    { 
        path: 'create-post', 
        component: CreatePostComponent,
        canActivate: [AuthGuard],
    },
    { 
        path: 'search', 
        component: SearchComponent,
        canActivate: [AuthGuard],
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
        path: 'hikes/:id/details',
        resolve: { post: HikeDetailsResolver },        
        component: HikeDetailsComponent,
    },
    {
        path: 'hikes/:id/gallery',
        resolve: { post: HikeDetailsResolver },        
        component: GalleryComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'hikes/:id/edit',
        resolve: { post: HikeDetailsResolver },        
        component: EditPostComponent,
        canActivate: [AuthGuard]
    },
    {path: '**', component: NotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
