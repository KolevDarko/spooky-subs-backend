import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { Subscription } from './subscriptions/entities/subscription.entity';
import { BlockListenerService } from './block-listener/block-listener.service';
import { BlockListenerModule } from './block-listener/block-listener.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [Subscription],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    SubscriptionsModule,
    BlockListenerModule,
  ],
  controllers: [AppController],
  providers: [AppService, BlockListenerService],
})
export class AppModule {}
