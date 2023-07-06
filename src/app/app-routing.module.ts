import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AllHikesComponent } from './hikes/all-hikes/all-hikes.component';
import { MyHikesComponent } from './hikes/my-hikes/my-hikes.component';
import { CreatePostComponent } from './hikes/create-post/create-post.component';
import { SearchComponent } from './hikes/search/search.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'all-hikes', component: AllHikesComponent},
  {path: 'my-hikes', component: MyHikesComponent},
  {path: 'create-post', component: CreatePostComponent},
  {path: 'search', component: SearchComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
