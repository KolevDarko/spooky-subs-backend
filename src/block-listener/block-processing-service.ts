import { Injectable } from '@nestjs/common';
import { ethers, EventLog } from 'ethers';
import { contractInfo } from './contractInfo';
import { SubscriptionsService } from '../subscriptions/subscriptions.service';

@Injectable()
export class BlockProcessingService {
  constructor(private readonly subscriptionsService: SubscriptionsService) {}

  async readPastBlocks(startBlock: number, endBlock: number) {
    // Create a provider instance to connect to the Ethereum network
    const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);

    // Set the contract address and ABI
    const contractAddress = '0x2744041d1cDf24C6c01290d03E17D9467207f72F';

    // Create a new contract instance
    const contract = new ethers.Contract(
      contractAddress,
      contractInfo.abi,
      provider,
    );

    const eventTypes = [
      'SubscriptionCreated',
      'SubscriptionPaused',
      'SubscriptionActivated',
      'Payout',
    ];

    let events = [];

    for (const eventType of eventTypes) {
      try {
        // Get the filter for the event
        const eventFilter = contract.filters[eventType]();

        // Get the events for the range of blocks
        const currentEvents = await contract.queryFilter(
          eventFilter,
          startBlock,
          endBlock,
        );
        events = events.concat(currentEvents);
        // this.subscriptionCreatedProcessor.processEvent(events[0]);
      } catch (e) {
        if (!(e instanceof TypeError)) {
          throw e;
        }
        // else: No events of eventType in blocks
      }
    }

    console.log(
      `Found ${events.length} events between blocks ${startBlock} and ${endBlock}:`,
    );

    // TODO: check if this sorting is correct.
    events.sort((a: EventLog, b: EventLog) => a.blockNumber - b.blockNumber);
    for (const event of events) {
      await this.processEvent(event);
    }
  }

  private async processEvent(event: EventLog) {
    switch (event.fragment.name) {
      case 'SubscriptionCreated':
        return this.processCreationEvent(event);
      case 'SubscriptionPaused':
        return this.processPausedEvent(event);
      case 'SubscriptionActivated':
        return this.processActivatedEvent(event);
      case 'Payout':
        return this.processPayoutEvent(event);
    }
  }

  private async processCreationEvent(event: EventLog) {
    const { subscriptionId, subscription } = event.args;
    const { payer, receiver, amount, token, payoutPeriod, active, lastPayout } =
      subscription;
    console.log(`Creating subscription: `, subscription);
    return this.subscriptionsService.create(
      subscriptionId,
      payer,
      receiver,
      amount,
      token,
      payoutPeriod,
      active,
      lastPayout,
    );
  }

  private async processPausedEvent(event: EventLog) {
    const subscriptionId = event.args[0].toString();
    console.log(`Pausing Subscription ${subscriptionId}`);
    return this.subscriptionsService.pauseSubscription(subscriptionId);
  }

  private async processActivatedEvent(event: EventLog) {
    const subscriptionId = event.args[0].toString();
    console.log(`Activating Subscription ${subscriptionId}`);
    return this.subscriptionsService.activateSubscription(subscriptionId);
  }

  private async processPayoutEvent(event: EventLog) {
    // TODO: define what should happen here.
    return null;
  }
}
