import { IsString } from 'class-validator';

export class CreatePhysicalActivityTypeDto {
  @IsString()
  name: string;

  @IsString()
  description: string;
}
