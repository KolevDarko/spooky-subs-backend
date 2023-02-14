import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import { Subscription } from './entities/subscription.entity';

@Injectable()
export class SubscriptionsService {
  constructor(
    @InjectRepository(Subscription)
    private subscriptionRepository: Repository<Subscription>,
  ) {}

  create(createSubscriptionDto: CreateSubscriptionDto): Promise<Subscription> {
    const newSubscription = this.subscriptionRepository.create({
      ...createSubscriptionDto,
    });
    return this.subscriptionRepository.save(newSubscription);
  }

  findAll(): Promise<Subscription[]> {
    return this.subscriptionRepository.find();
  }

  findOne(id: number): Promise<Subscription> {
    return this.subscriptionRepository.findOne({ where: { id } });
  }

  update(id: number, updateSubscriptionDto: UpdateSubscriptionDto) {
    return this.subscriptionRepository.update(id, updateSubscriptionDto);
  }

  remove(id: number) {
    return this.subscriptionRepository.delete(id);
  }
}
