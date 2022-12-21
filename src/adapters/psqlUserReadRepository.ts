import { UserStatus } from "domain/user/status";
import { UserReadRepository } from "../domain/user/repository";

export class PsqlUserReadRepository implements UserReadRepository {
  async FindAll(options: { status: UserStatus }): Promise<void> {
    console.log(options);
  }
}
