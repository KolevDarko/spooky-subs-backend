import { Controller, Get, Param } from '@nestjs/common';
import { SubscriptionsService } from './subscriptions.service';

@Controller('subscriptions')
export class SubscriptionsController {
  constructor(private readonly subscriptionsService: SubscriptionsService) {}

  @Get()
  findAll() {
    return this.subscriptionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subscriptionsService.findOne(+id);
  }

  @Get('vendor/:vendorAddress')
  findVendorSubscriptions(@Param('vendorAddress') vendorAddress: string) {
    return this.subscriptionsService.findVendorSubscriptions(vendorAddress);
  }

  @Get('client/:clientAddress')
  findClientSubscriptions(@Param('clientAddress') clientAddress: string) {
    return this.subscriptionsService.findClientSubscriptions(clientAddress);
  }
}
