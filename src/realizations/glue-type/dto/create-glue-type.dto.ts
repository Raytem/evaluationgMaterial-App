import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateGlueTypeDto {
  @ApiProperty({ type: String })
  @IsString()
  name: string;
}
