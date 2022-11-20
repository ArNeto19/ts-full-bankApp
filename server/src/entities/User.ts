import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { Account } from "./Account";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ type: "varchar"})
  password: any;

  @OneToOne(() => Account, (account) => account.id, { nullable: false, eager: true, cascade: true })
  @JoinColumn({ name: "accountId" })
  accountId: Account;
}
