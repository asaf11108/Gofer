import { Injectable } from '@angular/core';
import { User } from '../interfaces/IUser';


@Injectable()
export class UserService {
  urlBase: string = "/assets/users/data.json";

  constructor() { }

  addUser(user: User){
    return () => {};
  }
}
