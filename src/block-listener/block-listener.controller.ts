import { Body, Controller, Post } from '@nestjs/common';
import { ReplayEventsDto } from './dto/replay-events.dto';
import { BlockProcessingService } from './block-processing-service';

@Controller('block-listener')
export class BlockListenerController {
  constructor(
    private readonly blockProcessingService: BlockProcessingService,
  ) {}

  @Post('replay')
  async replayEvents(@Body() replayEventsDto: ReplayEventsDto) {
    return await this.blockProcessingService.readPastBlocks(
      replayEventsDto.startBlock,
      replayEventsDto.endBlock,
    );
  }
}
