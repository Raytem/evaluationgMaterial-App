import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive } from 'class-validator';
import { PrimaryGeneratedColumn } from 'typeorm';

export abstract class AbstractBaseEntity {
  @ApiProperty({ type: Number, minimum: 1 })
  @PrimaryGeneratedColumn()
  @IsNumber()
  @IsPositive()
  id: number;
}
