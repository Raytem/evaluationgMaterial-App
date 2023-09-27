import { IsString } from 'class-validator';

export class CreateLayerTypeDto {
  @IsString()
  name: string;
}
