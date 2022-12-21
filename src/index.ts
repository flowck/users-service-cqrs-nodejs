import { log } from "console";
import { pingPsql } from "./adapters/models/ping";
import { PsqlUserReadRepository } from "./adapters/psqlUserReadRepository";
import { App } from "./app/app";
import { config } from "./config";
import { HttpPort } from "./ports/http";

async function main() {
  await pingPsql();
  const userReadRepo = new PsqlUserReadRepository();

  const app = new App(userReadRepo);
  const httpPort = new HttpPort(app);

  httpPort.start(config.port);

  async function onTerminationDoCleanup(signal: NodeJS.Signals) {
    log("signal", signal);
    await httpPort.stop();
  }

  process.on("SIGTERM", onTerminationDoCleanup);
  process.on("SIGINT", onTerminationDoCleanup);
}

main();
