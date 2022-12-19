import { Query } from "../../common/cqrs";

export class AllBlockedUsers implements Query<void, void> {
  constructor() {
    console.log("AllBlockedUsers");
  }

  async handle(q: void): Promise<void> {
    console.log(q);
  }
}
