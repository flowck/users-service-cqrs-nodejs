import { AllBlockedUsers } from "./query/allBlockedUsers";

interface Queries {
  allBlockedUsers: AllBlockedUsers;
}

interface Commands {
  demo: string;
}

export class App {
  constructor(public queries: Queries, public commands: Commands) {}
}
