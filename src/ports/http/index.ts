import express, { Express } from "express";
import { Server } from "http";
import { App } from "../../app/app";
import { log } from "../../common/logger";

export class HttpPort {
  private server!: Express;
  private httpServer!: Server;
  private app!: App;

  constructor(app: App) {
    this.server = express();
    this.app = app;
  }

  start(port: number) {
    this.httpServer = this.server.listen(port, () => {
      log.info(`Server is running at ${port}`);
    });
  }

  async stop(): Promise<void> {
    return new Promise((resolve) => {
      this.httpServer.close(() => {
        log.info("The server has been shutdown:");
        resolve();
      });
    });
  }
}
