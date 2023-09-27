import { AbstractBaseEntity } from 'src/realizations/abstract-base-entity';
import { ConditionEntity } from 'src/realizations/condition/entities/condition.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('AbrasionType')
export class AbrasionTypeEntity extends AbstractBaseEntity {
  @Column()
  name: string;

  @OneToMany(() => ConditionEntity, (condition) => condition.abrasionType)
  conditions: ConditionEntity[];
}
