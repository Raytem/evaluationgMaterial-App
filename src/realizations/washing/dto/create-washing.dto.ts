import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber, IsPositive } from 'class-validator';

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
  @IsPositive()
  @IsInt()
  @IsNumber()
  washingType_id: number;
}
