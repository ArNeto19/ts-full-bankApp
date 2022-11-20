import "dotenv/config";
import express from "express";
import { userRepository } from "../repositories/userRepository";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export class AuthenticateController {
  async login(req: express.Request, res: express.Response) {
    const { username, password } = req.body;

    const user = await userRepository.findOneBy({ username: username });

    if (!user) {
      return res.status(403).json({ message: "Invalid username or password" });
    }

    const verifyPass = await bcrypt.compare(password, user.password);

    if (!verifyPass) {
      return res.status(403).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username, accountId: user.accountId },
      process.env.JWT_PASS ?? "",
      { expiresIn: "24h" }
    );

    res.json({ token });
  }

  async getProfile(req: express.Request, res: express.Response) {
    res.json(req.user);
  }
}
