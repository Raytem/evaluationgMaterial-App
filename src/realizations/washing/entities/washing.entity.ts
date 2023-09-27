import { AbstractBaseEntity } from 'src/realizations/abstract-base-entity';
import { ConditionEntity } from 'src/realizations/condition/entities/condition.entity';
import { WashingTypeEntity } from 'src/realizations/washing-type/entities/washing-type.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';

@Entity('Washing')
export class WashingEntity extends AbstractBaseEntity {
  @Column()
  temperature: number;

  @Column()
  duration: number;

  @Column()
  press: number;

  @OneToOne(() => ConditionEntity, (condition) => condition.washing, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'washing_id' })
  condition: ConditionEntity;

  @ManyToOne(() => WashingTypeEntity, (washingType) => washingType.washings, {
    eager: true,
  })
  @JoinColumn({ name: 'washingType_id' })
  washingType: WashingTypeEntity;
}
