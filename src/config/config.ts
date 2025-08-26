// import { config as conf } from "dotenv";

// conf();

// native support in node20+ for env files
process.loadEnvFile(".env");

const _config = {
  port: process.env.PORT,
  databaseUrl: process.env.MONGO_CONNECTION_STRING,
};

export const config = Object.freeze(_config);
