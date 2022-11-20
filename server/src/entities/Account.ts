import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('accounts')
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  balance: number;
}
