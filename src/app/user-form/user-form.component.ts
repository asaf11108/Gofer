import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserForm, User } from '../interfaces/IUser';
import { UserService } from '../services/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  userForm: UserForm;
  fieldAlert: string = 'This field is required';
  contactForm: FormGroup;
  error: IError = new IError();
  data: User[];
  fileToUpload: File;
  imageUrl: string = "";
  isLoaded: boolean = false;

  isOpened = false;

  constructor(private userService: UserService, private toastr: ToastrService, private http: HttpClient) {
    this.userForm = new UserForm("", "", "", "", '', "", "", "", "");
    this.setFormGroup();

  }

  private setFormGroup() {
    let formControl = {};
    Object.keys(this.userForm).slice(0, Object.keys(this.userForm).length - 1).forEach(function (key) {
      formControl[key] = new FormControl('', {
        validators: Validators.required,
      });
    });
    this.contactForm = new FormGroup(formControl);
  }

  ngOnInit() {
    this.userService.cast.subscribe(dataSource => this.data = dataSource);
  }

  submitUser() {
    if (this.checkValidation())
      return;

    let user: User = new User(this.userForm.firstName,
      this.userForm.lastName,
      this.userForm.birthDate,
      this.userForm.phoneNumber,
      this.userForm.emailAddress,
      this.userForm.userName,
      this.userForm.password,
      this.imageUrl);

    this.userService.addUser(user);

    this.toastr.success('User Added', '', {
      closeButton: true,
    });
    this.clearDetails();
  }

  private checkValidation(): boolean {
    for (let key in this.error)
      this.error[key] = !this.contactForm.controls[key].valid;
    return !this.contactForm.valid;
  }

  clearDetails() {
    for (let key in this.userForm)
      this.userForm[key] = "";
    this.isLoaded = false;
    this.imageUrl = "";
  }

  fileChange(fileList: FileList) {
    this.fileToUpload = fileList.item(0);

    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
    this.isLoaded = true;
  }

}

class IError {
  constructor(
    public firstName: boolean = false,
    public lastName: boolean = false,
    public birthDate: boolean = false,
    public phoneNumber: boolean = false,
    public emailAddress: boolean = false,
    public userName: boolean = false,
    public password: boolean = false,
    public repeatPassword: boolean = false,
  ) { }
}