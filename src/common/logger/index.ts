import log4js from "log4js";
import { config } from "../../config";

export const log = log4js.getLogger();

log.level = config.logLevel;
