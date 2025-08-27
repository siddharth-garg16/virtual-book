import express from "express";
import { createUser } from "./user.controller";

const userRouter = express.Router();

// user routes
userRouter.post("/register", createUser);

export default userRouter;
