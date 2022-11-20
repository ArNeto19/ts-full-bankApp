import express from "express";
import { transactionRepository } from "../repositories/transactionRepository";

export class TransactionController {
  async create(req: express.Request, res: express.Response) {
    const { debitedAccountId, creditedAccountId, value } = req.body;

    if (!debitedAccountId) {
      return res.status(400).json({ message: ".. missing" });
    }
    if (!creditedAccountId) {
      return res.status(400).json({ message: ".. missing" });
    }

    try {
      const newUser = transactionRepository.create({
        debitedAccountId,
        creditedAccountId,
      });

      await transactionRepository.save(newUser);

      return res.status(201).json(newUser);
    } catch (err) {
      return res.status(500).json({ message: `Internal server error: ${err}` });
    }
  }
}
