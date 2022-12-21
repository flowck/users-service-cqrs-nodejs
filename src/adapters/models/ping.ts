import { log } from "../../common/logger";
import { Sequelize } from "sequelize";

const db = require("./index")

export async function pingPsql() {
    try {
        await db.sequelize.query("SELECT * FROM pg_catalog.pg_database")
        log.info("Ping to Postgres succeeded")
    } catch (error) {
        throw error
    }
}
