import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { Account } from "./Account";

@Entity("transactions")
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Account, (account) => account.id)
  @JoinColumn({ name: "debitedAccountId" })
  debitedAccountId: Account;

  @ManyToOne(() => Account, (account) => account.id)
  @JoinColumn({ name: "creditedAccountId" })
  creditedAccountId: Account;

  @Column()
  value: number;

  @CreateDateColumn()
  createdAt: Date;
}
