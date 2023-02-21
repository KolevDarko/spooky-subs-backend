import { IsNumber } from 'class-validator';

export class ReplayEventsDto {
  @IsNumber()
  startBlock;

  @IsNumber()
  endBlock;
}
