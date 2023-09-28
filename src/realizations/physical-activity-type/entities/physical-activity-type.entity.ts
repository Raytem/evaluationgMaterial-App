import { ApiProperty } from '@nestjs/swagger';
import { AbstractBaseEntity } from 'src/realizations/abstract-base-entity';
import { ConditionEntity } from 'src/realizations/condition/entities/condition.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('PhysicalActivityType')
export class PhysicalActivityTypeEntity extends AbstractBaseEntity {
  @ApiProperty({ type: String })
  @Column()
  name: string;

  @ApiProperty({ type: String })
  @Column()
  description: string;

  @OneToMany(
    () => ConditionEntity,
    (condition) => condition.physicalActivityType,
  )
  conditions: ConditionEntity[];
}
