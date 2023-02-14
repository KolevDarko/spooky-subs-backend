import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubscriptionEntity } from './entity/subscription.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SubscriptionEntity])],
  controllers: [],
  providers: [],
})
export class SubscriptionsModule {}
