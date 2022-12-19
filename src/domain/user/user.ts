export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  GetFullName(): string;
}

export class User implements IUser {
  id: string;
  firstName: string;
  lastName: string;

  constructor() {
    this.id = "";
    this.firstName = "";
    this.lastName = "";
  }

  GetFullName(): string {
    return "";
  }
}
