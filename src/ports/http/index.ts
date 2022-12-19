import express, { Express } from "express";
import { Server } from "http";
import { App } from "../../app/app";

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
      console.log("Server is running");
    });
  }

  async stop(): Promise<void> {
    return new Promise((resolve) => {
      this.httpServer.close(() => {
        console.log("The server has been shutdown:");
        resolve();
      });
    });
  }
}
