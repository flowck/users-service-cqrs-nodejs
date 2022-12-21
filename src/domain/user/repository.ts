import { UserStatus } from "./status";

export interface Repository {
  Find(id: string): Promise<void>;
}

export interface UserReadRepository {
  FindAll(options: { status: UserStatus }): Promise<void>;
}
