import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DialogsComponent } from './components/dialogs/dialogs.component';
import { FriendsComponent } from './components/friends/friends.component';
import { MusicComponent } from './components/music/music.component';
import { NewsComponent } from './components/news/news.component';
import { PeopleComponent } from './components/people/people.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {path: 'profile/:id', component: ProfileComponent},
  {path: 'dialogs', component: DialogsComponent},
  {path: 'dialogs/:id', component: DialogsComponent},
  {path: 'friends', component: FriendsComponent},
  {path: 'music', component: MusicComponent},
  {path: 'news', component: NewsComponent},
  {path: 'people', component: PeopleComponent},
  {path: 'settings', component: SettingsComponent},
  {path: '', redirectTo: '/news', pathMatch: 'full'},
  {path: 'error', component: ErrorComponent},
  {path: '**', redirectTo: '/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
