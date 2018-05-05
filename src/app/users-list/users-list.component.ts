import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/IUser';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  data: User[];
  hovering = {};

  constructor(private userService: UserService) { }

  // this.toastr.error('User Deleted', '', {
  //   closeButton: true,
  // });

  ngOnInit() {
    this.userService.cast.subscribe(dataSource => this.data = dataSource);
  }

  deleteUser(userName: string){
    this.userService.deleteUser(userName);
  }

}
