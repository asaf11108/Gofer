import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  constructor(private toastr: ToastrService) {
    
   }

  ngOnInit() {
  }
  
  alerter(){
    this.toastr.error('User Added', '', {
      closeButton: true,
    });
  }

}
