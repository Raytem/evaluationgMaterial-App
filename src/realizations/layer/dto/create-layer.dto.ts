import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber, IsPositive } from 'class-validator';

export class CreateLayerDto {
  @ApiProperty({ type: Number, minimum: 1 })
  @IsInt()
  @IsPositive()
  @IsNumber()
  indexNum: number;

  @ApiProperty({ type: Number, minimum: 1 })
  @IsPositive()
  @IsInt()
  @IsNumber()
  layerType_id: number;
}
