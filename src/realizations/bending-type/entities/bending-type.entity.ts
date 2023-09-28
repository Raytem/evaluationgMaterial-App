import { ApiProperty } from '@nestjs/swagger';
import { AbstractBaseEntity } from 'src/realizations/abstract-base-entity';
import { ConditionEntity } from 'src/realizations/condition/entities/condition.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('BendingType')
export class BendingTypeEntity extends AbstractBaseEntity {
  @ApiProperty({ type: String })
  @Column()
  name: string;

  @OneToMany(() => ConditionEntity, (condition) => condition.bendingType)
  conditions: ConditionEntity[];
}
