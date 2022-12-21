export enum UserStatuses {
  Blocked = "blocked",
  UnBlocked = "unblocked",
}

export type UserStatus = UserStatuses.Blocked | UserStatuses.UnBlocked;
