import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateLayerDto {
  @ApiProperty({ type: Number })
  @IsString()
  indexNum: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @IsPositive()
  layerType_id: number;
}
