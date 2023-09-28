import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateBendingTypeDto {
  @ApiProperty({ type: String })
  @IsString()
  name: string;
}
