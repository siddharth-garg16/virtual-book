import { Request, Response, NextFunction } from "express";

// route: '/register'
const createUser = async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ message: "Registered" });
};

export { createUser };
