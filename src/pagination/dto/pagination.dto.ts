import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsPositive } from 'class-validator';

export class PaginationDto {
  @Type(() => Number)
  @IsOptional()
  @IsPositive()
  @IsNumber()
  page: number;

  @Type(() => Number)
  @IsOptional()
  @IsPositive()
  @IsNumber()
  perPage: number;
}
