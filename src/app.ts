import express, { NextFunction, Request, Response } from "express";
import errorHandler from "./middlewares/error-handler.middleware";
import userRouter from "./user/user.route";

const APP = express();

APP.get("/", (req: Request, res: Response, next: NextFunction) => {
  //   const error = createHttpError(400, "ungabunga");
  //   throw error;
  res.json({ message: "App is running" });
});

// routes registration
APP.use("/api/users", userRouter);

// global error handler middleware
APP.use(errorHandler);

export default APP;
