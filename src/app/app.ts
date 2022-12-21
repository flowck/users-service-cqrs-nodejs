import { UserReadRepository } from "./../domain/user/repository";
import { AllUsers } from "./query/allUsers";

interface Queries {
  allUsers: AllUsers;
}

interface Commands {
  blockUser: string;
  unBlockUser: string;
}

export class App {
  public queries!: Queries;
  public commands!: Commands;

  constructor(private userReadRepo: UserReadRepository) {
    this.queries = {
      allUsers: new AllUsers(userReadRepo),
    };

    this.commands = {
      blockUser: "",
      unBlockUser: "",
    };
  }
}
