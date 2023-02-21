import { Module } from '@nestjs/common';
import { SubscriptionsModule } from '../subscriptions/subscriptions.module';
import { BlockListenerController } from './block-listener.controller';
import { BlockListenerService } from './block-listener.service';
import { BlockProcessingService } from './block-processing-service';

@Module({
  imports: [SubscriptionsModule],
  controllers: [BlockListenerController],
  providers: [BlockListenerService, BlockProcessingService],
})
export class BlockListenerModule {}
