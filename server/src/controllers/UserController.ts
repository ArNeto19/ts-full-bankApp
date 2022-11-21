import express from "express";
import { User } from "../entities/User";
import { userRepository } from "../repositories/userRepository";
import bcrypt from "bcryptjs";

export class UserController {
  async create(req: express.Request, res: express.Response) {
    const { username, password } = req.body;
    const regExp = /^(?=.*[A-Z])(?=.*[0-9])/;
    
    const validPass = regExp.test(password);

    if (username.length < 3 || password.length < 8) {
      return res
        .status(409)
        .json({ message: "It was not possible to create new user. Invalid username or password!" });
    }
    
    if (!validPass) {
      return res
        .status(409)
        .json({ message: "It was not possible to create new user. Invalid username or password!" });        
    } 


      const userExists = await userRepository.findOneBy({
        username: username,
      });

      if (userExists) {
        return res.status(409).json({ message: "Username already in use" });
      }

      const hashPassword = await bcrypt.hash(password, 10);

      try {
        const newUser = userRepository.create({
          username,
          password: hashPassword,
          accountId: {
            balance: 100,
          },
        });

        await userRepository.save(newUser);

        const { password: _, ...user } = newUser;

        return res.status(201).json(user);
      } catch (err) {
        return res.status(500).json({ message: `Internal server error: ${err}` });
      }
    
  }
}
