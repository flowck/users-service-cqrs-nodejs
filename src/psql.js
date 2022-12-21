require("dotenv/config");

const baseConfig = {
  username: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DB_NAME,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  dialect: "postgres",
};

module.exports = {
  development: baseConfig,
  test: baseConfig,
  production: baseConfig,
};
