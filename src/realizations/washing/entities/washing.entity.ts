import { ApiProperty } from '@nestjs/swagger';
import { AbstractBaseEntity } from 'src/realizations/abstract-base-entity';
import { ConditionEntity } from 'src/realizations/condition/entities/condition.entity';
import { WashingTypeEntity } from 'src/realizations/washing-type/entities/washing-type.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';

@Entity('Washing')
export class WashingEntity extends AbstractBaseEntity {
  @ApiProperty({ type: Number })
  @Column()
  temperature: number;

  @ApiProperty({ type: Number })
  @Column()
  duration: number;

  @ApiProperty({ type: Number })
  @Column()
  press: number;

  @OneToOne(() => ConditionEntity, (condition) => condition.washing, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'washing_id' })
  condition: ConditionEntity;

  @ApiProperty({ type: () => WashingTypeEntity })
  @ManyToOne(() => WashingTypeEntity, (washingType) => washingType.washings, {
    eager: true,
  })
  @JoinColumn({ name: 'washingType_id' })
  washingType: WashingTypeEntity;
}
