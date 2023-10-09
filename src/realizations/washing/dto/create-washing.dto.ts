import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsInt, IsNumber, IsPositive } from 'class-validator';
import { WashingEntity } from '../entities/washing.entity';

export class CreateWashingDto extends PickType(WashingEntity, [
  'cyclesCnt',
  'duration',
  'press',
  'temperature',
]) {
  @ApiProperty({ type: Number, minimum: 1 })
  @IsPositive()
  @IsInt()
  @IsNumber()
  washingType_id: number;
}
