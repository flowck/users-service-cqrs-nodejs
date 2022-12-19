import { Query } from "../../common/cqrs";

export class AllBlockedUsers implements Query<void, void> {
  constructor() {}

  async handle(q: void): Promise<void> {}
}
