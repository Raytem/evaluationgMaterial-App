import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateProductionMethodDto {
  @ApiProperty({ type: String })
  @IsString()
  name: string;
}
