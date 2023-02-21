import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subscription } from './entities/subscription.entity';

@Injectable()
export class SubscriptionsService {
  constructor(
    @InjectRepository(Subscription)
    private subscriptionRepository: Repository<Subscription>,
  ) {}

  create(
    blockchainSubscriptionId,
    payer,
    receiver,
    amount,
    token,
    payoutPeriod,
    active,
    lastPayout,
  ): Promise<Subscription> {
    const newSubscription = this.subscriptionRepository.create({
      blockchainSubscriptionId,
      payer,
      receiver,
      amount,
      token,
      payoutPeriod,
      active,
      lastPayout,
    });
    return this.subscriptionRepository.save(newSubscription);
  }

  async pauseSubscription(
    blockchainSubscriptionId: string,
  ): Promise<Subscription> {
    const sub: Subscription = await this.subscriptionRepository.findOne({
      where: { blockchainSubscriptionId },
    });
    sub.active = false;
    return this.subscriptionRepository.save(sub);
  }

  async activateSubscription(
    blockchainSubscriptionId: string,
  ): Promise<Subscription> {
    const sub: Subscription = await this.subscriptionRepository.findOne({
      where: { blockchainSubscriptionId },
    });
    sub.active = true;
    return this.subscriptionRepository.save(sub);
  }

  findAll(): Promise<Subscription[]> {
    return this.subscriptionRepository.find();
  }

  findVendorSubscriptions(vendorAddress: string): Promise<Subscription[]> {
    return this.subscriptionRepository.find({
      where: { receiver: vendorAddress },
    });
  }

  findClientSubscriptions(clientAddress: string): Promise<Subscription[]> {
    return this.subscriptionRepository.find({
      where: { payer: clientAddress },
    });
  }

  findOne(id: number): Promise<Subscription> {
    return this.subscriptionRepository.findOne({ where: { id } });
  }
}
