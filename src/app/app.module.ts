import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LeftNavigatorComponent } from './left-navigator/left-navigator.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { RecentUsersComponent } from './recent-users/recent-users.component';
import { RecentPhotosComponent } from './recent-photos/recent-photos.component';


@NgModule({
  declarations: [
    AppComponent,
    LeftNavigatorComponent,
    UsersListComponent,
    UserFormComponent,
    RecentUsersComponent,
    RecentPhotosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
