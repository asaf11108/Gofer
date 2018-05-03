import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserForm, User } from '../interfaces/IUser';
import { UserService } from '../services/user.service';

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

  constructor(private userService: UserService, private toastr: ToastrService) {
    this.userForm = new UserForm("", "", "", "", '', "", "", "", "");
    this.setFormGroup();

  }

  private setFormGroup() {
    this.contactForm = new FormGroup({
      firstName: new FormControl('', {
        validators: Validators.required,
        updateOn: 'submit'
      }),
      lastName: new FormControl('', {
        validators: Validators.required,
        updateOn: 'submit'
      }),
      birthDate: new FormControl('', {
        validators: Validators.required,
        updateOn: 'submit'
      }),
      phoneNumber: new FormControl('', {
        validators: Validators.required,
        updateOn: 'submit'
      }),
      emailAddress: new FormControl('', {
        validators: Validators.required,
        updateOn: 'submit'
      }),
      userName: new FormControl('', {
        validators: Validators.required,
        updateOn: 'submit'
      }),
      password: new FormControl('', {
        validators: Validators.required,
        updateOn: 'submit'
      }),
      repeatPassword: new FormControl('', {
        validators: Validators.required,
        updateOn: 'submit'
      }),
      photoPath: new FormControl('', {
        validators: Validators.required,
        updateOn: 'submit'
      }),
    });
  }

  ngOnInit() {
  }

  submitUser(userForm: UserForm) {
    // if (this.checkValidation())
    //   return;
    let user: User = new User(userForm.firstName,
      userForm.lastName,
      userForm.birthDate,
      userForm.phoneNumber,
      userForm.emailAddress,
      userForm.userName,
      userForm.password,
      userForm.photoPath);

      this.toastr.success('User Added', '', {
        closeButton: true,
      });
    // this.userService.addUser(user).subscribe(result => {
    // },
    //   error => {
    //     console.log(error);

    //   });
  }

  private checkValidation(): boolean {
    this.error.firstName = !this.contactForm.controls['firstName'].valid;
    this.error.lastName = !this.contactForm.controls['lastName'].valid;
    this.error.birthDate = !this.contactForm.controls['birthDate'].valid;
    this.error.phoneNumber = !this.contactForm.controls['phoneNumber'].valid;
    this.error.emailAddress = !this.contactForm.controls['emailAddress'].valid;
    this.error.userName = !this.contactForm.controls['userName'].valid;
    this.error.password = !this.contactForm.controls['password'].valid;
    this.error.repeatPassword = !this.contactForm.controls['repeatPassword'].valid;
    this.error.photoPath = !this.contactForm.controls['photoPath'].valid;
    return !this.contactForm.valid;
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
    public photoPath: boolean = false
  ) { }
}