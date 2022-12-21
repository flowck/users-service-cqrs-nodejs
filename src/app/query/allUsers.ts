import { UserStatus } from "domain/user/status";
import { Query } from "../../common/cqrs";
import { UserReadRepository } from "./../../domain/user/repository";

type QueryOptions = { status: UserStatus };
type AllUsersHandler = Query<QueryOptions, void>;

export class AllUsers implements AllUsersHandler {
  constructor(private repo: UserReadRepository) {}

  async handle(q: QueryOptions): Promise<void> {
    console.log(q.status);
  }
}
