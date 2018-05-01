import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'recent-users',
  templateUrl: './recent-users.component.html',
  styleUrls: ['./recent-users.component.scss']
})
export class RecentUsersComponent{
  usersDir:string = 'assets/recent/profile/';
  numberOfPics:number = 8;
  numbers:number[];

constructor() {
  this.numbers = Array(this.numberOfPics).fill(0).map((x,i)=>i+1);
 }

ngOnInit() {

  }

}
