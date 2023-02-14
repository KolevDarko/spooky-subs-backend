import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SubscriptionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vendor: string;

  @Column()
  client: string;

  @Column()
  amount: number;

  @Column()
  period: number;

  @Column({ type: 'date' })
  next_payout: string;
}
