import "dotenv/config";
import express from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { userRepository } from "../repositories/userRepository";

export const authMiddleware = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: "UNAUTHORIZED" });
  }

  const token: string = authorization.split(" ")[1];
  
  const { id } = jwt.verify(token, process.env.JWT_PASS ?? "") as JwtPayload;

  const user = await userRepository.findOneBy({ id });

  if (!user) {
    return res.status(403).json({ message: "Forbidden" });
  }

  const { password: _, ...loggedUser } = user;

  req.user = loggedUser;

  next();
};
