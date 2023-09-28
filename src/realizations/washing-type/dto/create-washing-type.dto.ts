import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateWashingTypeDto {
  @ApiProperty({ type: String })
  @IsString()
  name: string;
}
