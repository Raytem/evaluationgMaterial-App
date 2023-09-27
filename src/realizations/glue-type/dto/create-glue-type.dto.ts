import { IsString } from 'class-validator';

export class CreateGlueTypeDto {
  @IsString()
  name: string;
}
