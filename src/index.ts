import { App } from "./app/app";
import { AllBlockedUsers } from "./app/query/allBlockedUsers";
import { config } from "./config";
import { HttpPort } from "./ports/http";

const app = new App({ allBlockedUsers: new AllBlockedUsers() }, { demo: "" });
const httpPort = new HttpPort(app);

httpPort.start(config.port);

async function cleanup(signal: NodeJS.Signals) {
  console.log("signal", signal);
  await httpPort.stop();
}

process.on("SIGTERM", cleanup);
process.on("SIGINT", cleanup);
