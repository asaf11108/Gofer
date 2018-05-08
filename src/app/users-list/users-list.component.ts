import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/IUser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  data: User[];
  hovering = {};
  html="";

  constructor(private userService: UserService, private toastr: ToastrService) { }

  // this.toastr.error('User Deleted', '', {
  //   closeButton: true,
  // });

  ngOnInit() {
    this.userService.cast.subscribe(dataSource => this.data = dataSource);
  }


  deleteUser(userName: string) {
    this.userService.deleteUser(userName);
    this.toastr.error('User Deleted', '', {
      closeButton: true,
    });
  }

  hoveringFunc(user: User){
    this.hovering[user.userName] = true;
    this.html = `<span class="btn-block btn-danger well-sm">${user.firstName} ${user.lastName}</span>`;
  }

}
