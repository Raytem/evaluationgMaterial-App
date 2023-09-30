import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive } from 'class-validator';

export class CreateWashingDto {
  @ApiProperty({ type: Number })
  @IsNumber()
  temperature: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  duration: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  press: number;

  @ApiProperty({ type: Number, minimum: 1 })
  @IsNumber()
  @IsPositive()
  washingType_id: number;
}
