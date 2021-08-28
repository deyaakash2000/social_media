import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostDetailsComponent } from './post-details/post-details.component';
import { GetAllUsersComponent } from './get-all-users/get-all-users.component';
import { TextBoxComponent } from './text-box/text-box.component';
import { FriendRequestComponent } from './friend-request/friend-request.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { UpdateStep2Component } from './update-step2/update-step2.component';
import { GetAllFriendsComponent } from './get-all-friends/get-all-friends.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    RegisterComponent,
    LoginComponent,
    PostDetailsComponent,
    GetAllUsersComponent,
    TextBoxComponent,
    FriendRequestComponent,
    UpdatePasswordComponent,
    UpdateStep2Component,
    GetAllFriendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
