import { Injectable } from '@angular/core';
import { User } from '../interfaces/IUser';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'


@Injectable()
export class UserService {
  private data: User[] = [
    new User("Asaf", "Regev", "08/02/1990", "0526555743", "asaf11108@gmail.com", "asaf1", "123", "assets/users/1.jpg"),
    new User("Yair", "Regev", "08/02/1990", "0526555743", "asaf11108@gmail.com", "asaf2", "123", "assets/users/2.jpg"),
    new User("Roni", "Regev", "08/02/1990", "0526555743", "asaf11108@gmail.com", "asaf3", "123", "assets/users/3.jpg"),
  ]; 
  private dataSource =  new BehaviorSubject<User[]>(this.data);
  cast = this.dataSource.asObservable()
  ;
  constructor() {
   }

  // getUser(userName: string): User{
  //   return this.data.filter((u: User) => u.userName === userName)[0];
  // }

  getUsers(): User[]{
    return this.data;
  }

  addUser(user: User){
    this.data.push(user);
    this.dataSource.next(this.data);
  }

  deleteUser(userName: string){
    this.data = this.data.filter((u: User) => u.userName !== userName);
    this.dataSource.next(this.data);
  }
}
