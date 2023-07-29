import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllHikesComponent } from './all-hikes/all-hikes.component';
import { HikeDetailsResolver } from './hike-details/hike-details.resolver';
import { HikeDetailsComponent } from './hike-details/hike-details.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AuthGuard } from '../auth/auth.guard';
import { EditPostComponent } from './edit-post/edit-post.component';
import { DeletePostComponent } from './delete-post/delete-post.component';
import { MyHikesComponent } from './my-hikes/my-hikes.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { SearchComponent } from './search/search.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [
    {
        path: 'hikes',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: AllHikesComponent
            },
            {
                path: ':id/details',
                resolve: { post: HikeDetailsResolver },
                component: HikeDetailsComponent,
            },
            {
                path: ':id/gallery',
                resolve: { post: HikeDetailsResolver },
                component: GalleryComponent,
                canActivate: [AuthGuard],
            },
            {
                path: ':id/edit',
                resolve: { post: HikeDetailsResolver },
                component: EditPostComponent,
                canActivate: [AuthGuard]
            },
            {
                path: ':id/delete',
                resolve: { post: HikeDetailsResolver },
                component: DeletePostComponent,
                canActivate: [AuthGuard]
            },
        ],
    },    
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
    { path: '**', component: NotFoundComponent },   
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HikesRoutingModule { }