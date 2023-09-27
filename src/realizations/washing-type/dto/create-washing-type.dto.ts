import { IsString } from 'class-validator';

export class CreateWashingTypeDto {
  @IsString()
  name: string;
}
