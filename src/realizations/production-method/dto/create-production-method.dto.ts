import { IsString } from 'class-validator';

export class CreateProductionMethodDto {
  @IsString()
  name: string;
}
