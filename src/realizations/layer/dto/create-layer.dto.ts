import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateLayerDto {
  @ApiProperty({ type: Number, minimum: 1 })
  @IsNumber()
  @IsPositive()
  indexNum: number;

  @ApiProperty({ type: Number, minimum: 1 })
  @IsNumber()
  @IsPositive()
  layerType_id: number;
}
