import mongoose from "mongoose";
import { config } from "./config";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Connected successfully to the DB");
    });

    mongoose.connection.on("error", (error) => {
      console.error("Connection broken to the DB: ", error);
    });

    await mongoose.connect(config.databaseUrl as string);
  } catch (error) {
    console.error("Failed to connect to the DB: ", error);
    process.exit(1); // stops process if the DB was never connected (Server is pointless without the DB)
  }
};

export default connectDB;
