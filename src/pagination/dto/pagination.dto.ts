import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsPositive } from 'class-validator';

export class PaginationDto {
  @ApiProperty({ type: Number })
  @Type(() => Number)
  @IsOptional()
  @IsPositive()
  @IsNumber()
  page: number;

  @ApiProperty({ type: Number })
  @Type(() => Number)
  @IsOptional()
  @IsPositive()
  @IsNumber()
  perPage: number;
}
