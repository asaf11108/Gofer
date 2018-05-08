import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';

import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AppComponent } from './app.component';
import { LeftNavigatorComponent } from './left-navigator/left-navigator.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { RecentUsersComponent } from './recent-users/recent-users.component';
import { RecentPhotosComponent } from './recent-photos/recent-photos.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LeftNavigatorComponent,
    UsersListComponent,
    UserFormComponent,
    RecentUsersComponent,
    RecentPhotosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatBadgeModule,
    HttpClientModule,
    TooltipModule.forRoot()
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule { }
