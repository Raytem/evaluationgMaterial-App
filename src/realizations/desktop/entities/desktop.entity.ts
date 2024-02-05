import { ApiProperty } from '@nestjs/swagger';
import { AbstractBaseEntity } from 'src/realizations/abstract-base-entity';
import { Column, Entity } from 'typeorm';

@Entity('Desktop')
export class DesktopEntity extends AbstractBaseEntity {
  @ApiProperty({
    type: String,
    description: '1.0',
  })
  @Column()
  version: string;
}
