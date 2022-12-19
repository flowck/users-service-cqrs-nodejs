export interface Query<T, R> {
  handle(q: T): Promise<R>;
}

export interface Command<T> {
  handle(p: T): Promise<void>;
}
