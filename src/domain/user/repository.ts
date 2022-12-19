export interface Repository {
  Find(id: string): Promise<void>;
}
