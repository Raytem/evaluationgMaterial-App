import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateLayerTypeDto {
  @ApiProperty({ type: String })
  @IsString()
  name: string;
}
