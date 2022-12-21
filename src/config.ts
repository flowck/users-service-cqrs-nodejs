import "dotenv/config";

export const config = {
  port: Number(process.env.PORT),
  logLevel: process.env.LOG_LEVEL || "",
};
