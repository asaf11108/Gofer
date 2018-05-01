import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'recent-photos',
  templateUrl: './recent-photos.component.html',
  styleUrls: ['./recent-photos.component.scss']
})
export class RecentPhotosComponent implements OnInit {
  usersDir:string = 'assets/recent/paint/';
  numberOfPics:number = 1;
  numbers:number[];

  constructor() {
    this.numbers = Array(this.numberOfPics).fill(0).map((x,i)=>i+1);
   }

  ngOnInit() {
  }

}
