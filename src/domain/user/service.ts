import { Repository } from "./repository";
import { User } from "./user";

export interface IUserService {
  GetUsers(): Promise<User[] | null>;
}

export class UserService implements IUserService {
  private repo: Repository;

  constructor(repo: Repository) {
    if (!repo) {
      throw new Error("unable to create service without repository");
    }
    this.repo = repo;
  }

  GetUsers(): Promise<User[]> {
    return Promise.resolve([]);
  }
}
