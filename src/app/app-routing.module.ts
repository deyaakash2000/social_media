import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './core/guard/auth.guard';
import { LoginGuard } from './core/guard/login.guard';
import { FriendRequestComponent } from './friend-request/friend-request.component';
import { GetAllFriendsComponent } from './get-all-friends/get-all-friends.component';
import { GetAllUsersComponent } from './get-all-users/get-all-users.component';
import { HomeComponent } from './home/home.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { TextBoxComponent } from './text-box/text-box.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { UpdateStep2Component } from './update-step2/update-step2.component';

const routes: Routes = [
  {path:'',component:LoginComponent,canActivate:[LoginGuard]},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'all-users',component:GetAllUsersComponent,canActivate:[AuthGuard]},
  {path:'register',component:RegisterComponent,canActivate:[LoginGuard]},
  {path:'about',component:AboutComponent},
  {path:'about/:id',component:AboutComponent},
  {path:'post/:id',component:PostDetailsComponent,canActivate:[AuthGuard]},
  {path:'texts/:id',component:TextBoxComponent,canActivate:[AuthGuard]},
  {path:'friend-request',component:FriendRequestComponent,canActivate:[AuthGuard]},
  {path:'update',component:UpdatePasswordComponent},
  {path:'update2',component :UpdateStep2Component},
  {path:'friend-list',component: GetAllFriendsComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
