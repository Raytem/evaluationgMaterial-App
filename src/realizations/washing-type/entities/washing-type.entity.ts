import { ApiProperty } from '@nestjs/swagger';
import { AbstractBaseEntity } from 'src/realizations/abstract-base-entity';
import { WashingEntity } from 'src/realizations/washing/entities/washing.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('WashingType')
export class WashingTypeEntity extends AbstractBaseEntity {
  @ApiProperty({ type: String })
  @Column()
  name: string;

  @OneToMany(() => WashingEntity, (washing) => washing.washingType)
  washings: WashingEntity[];
}
