import express, { NextFunction, Request, Response } from "express";
import errorHandler from "./middlewares/error-handler.middleware";

const APP = express();

APP.get("/", (req: Request, res: Response, next: NextFunction) => {
  //   const error = createHttpError(400, "ungabunga");
  //   throw error;
  res.json({ message: "App is running" });
});

// global error handler middleware
APP.use(errorHandler);

export default APP;
