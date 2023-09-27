import { IsString } from 'class-validator';

export class CreateMembraneLayerPolymerTypeDto {
  @IsString()
  name: string;
}
