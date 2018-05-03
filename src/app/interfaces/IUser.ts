export class UserForm {
    constructor(
        public firstName: string,
        public lastName: string,
        public birthDate: string,
        public phoneNumber: string,
        public emailAddress: string,
        public userName: string,
        public password: string,
        public repeatPassword: string,
        public photoPath: string,
    ) { }
  }

  export class User {
    constructor(
        public firstName: string,
        public lastName: string,
        public birthDate: string,
        public phoneNumber: string,
        public emailAddress: string,
        public userName: string,
        public password: string,
        public photoPath: string,
    ) { }
  }