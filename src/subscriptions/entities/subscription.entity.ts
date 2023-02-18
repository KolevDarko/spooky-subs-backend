import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Subscription {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  blockchainSubscriptionId: string;

  @Column()
  payer: string;

  @Column()
  receiver: string;

  @Column({ type: 'decimal' })
  amount: number;

  @Column()
  token: string;

  @Column({ type: 'bigint' })
  payoutPeriod: number;

  @Column({ type: 'bigint' })
  lastPayout: number;

  @Column()
  active: boolean;
}
