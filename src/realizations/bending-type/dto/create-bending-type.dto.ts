import { IsString } from 'class-validator';

export class CreateBendingTypeDto {
  @IsString()
  name: string;
}
