import { IsString } from 'class-validator';

export class CreateAbrasionTypeDto {
  @IsString()
  name: string;
}
