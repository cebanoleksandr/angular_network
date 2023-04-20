import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MyPostsComponent } from './components/profile/my-posts/my-posts.component';
import { PostComponent } from './components/post/post.component';
import { DialogsComponent } from './components/dialogs/dialogs.component';
import { NewsComponent } from './components/news/news.component';
import { PeopleComponent } from './components/people/people.component';
import { FriendsComponent } from './components/friends/friends.component';
import { MusicComponent } from './components/music/music.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ErrorComponent } from './components/error/error.component';
import { DialogsListComponent } from './components/dialogs/dialogs-list/dialogs-list.component';
import { MessageComponent } from './components/dialogs/message/message.component';
import { ProfileInfoComponent } from './components/profile/profile-info/profile-info.component';
import { UserComponent } from './components/people/user/user.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileStatusComponent } from './components/profile/profile-info/profile-status/profile-status.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ProfileComponent,
    MyPostsComponent,
    PostComponent,
    DialogsComponent,
    NewsComponent,
    PeopleComponent,
    FriendsComponent,
    MusicComponent,
    SettingsComponent,
    ErrorComponent,
    DialogsListComponent,
    MessageComponent,
    ProfileInfoComponent,
    UserComponent,
    LoaderComponent,
    LoginComponent,
    ProfileStatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
