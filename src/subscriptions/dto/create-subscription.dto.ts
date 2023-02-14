import { IsDate, IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateSubscriptionDto {
  @IsString()
  vendor: string;
  @IsString()
  client: string;
  @IsNumber()
  amount: number;
  @IsNumber()
  period: number;
  @IsDate()
  @IsOptional()
  nextPayout: Date;
}
