import { Repository } from "../domain/user/repository";

export class PsqlRepository implements Repository {
  async Find(id: string): Promise<void> {}
}
