import { ApiProperty } from '@nestjs/swagger';
import { PrimaryGeneratedColumn } from 'typeorm';

export abstract class AbstractBaseEntity {
  @ApiProperty({ type: Number })
  @PrimaryGeneratedColumn()
  id: number;
}
