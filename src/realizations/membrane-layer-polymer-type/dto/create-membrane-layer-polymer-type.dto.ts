import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateMembraneLayerPolymerTypeDto {
  @ApiProperty({ type: String })
  @IsString()
  name: string;
}
