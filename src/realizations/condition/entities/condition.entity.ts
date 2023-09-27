import { AbrasionTypeEntity } from 'src/realizations/abrasion-type/entities/abrasion-type.entity';
import { AbstractBaseEntity } from 'src/realizations/abstract-base-entity';
import { BendingTypeEntity } from 'src/realizations/bending-type/entities/bending-type.entity';
import { MaterialEntity } from 'src/realizations/material/entities/material.entity';
import { PhysicalActivityTypeEntity } from 'src/realizations/physical-activity-type/entities/physical-activity-type.entity';
import { WashingEntity } from 'src/realizations/washing/entities/washing.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';

@Entity('Condition')
export class ConditionEntity extends AbstractBaseEntity {
  @Column()
  isPositive: boolean;

  @Column()
  minAirTemp: number;

  @Column()
  maxAirHumidity: number;

  @Column()
  avgAirSpeed: number;

  @Column()
  residenceTime: number;

  @Column({ nullable: true })
  torsionAngle: number;

  @Column({ nullable: true })
  stretchingCompression: number;

  @OneToOne(() => MaterialEntity, (material) => material.condition, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'material_id' })
  material: MaterialEntity;

  @ManyToOne(() => AbrasionTypeEntity, { eager: true })
  @JoinColumn({ name: 'abrasionType_id' })
  abrasionType: AbrasionTypeEntity;

  @OneToOne(() => WashingEntity, (washing) => washing.condition, {
    eager: true,
  })
  washing: WashingEntity;

  @ManyToOne(() => BendingTypeEntity, (bendingType) => bendingType.conditions, {
    eager: true,
  })
  @JoinColumn({ name: 'bendingType_id' })
  bendingType: BendingTypeEntity;

  @ManyToOne(() => PhysicalActivityTypeEntity, {
    eager: true,
  })
  @JoinColumn({ name: 'physicalActivityType_id' })
  physicalActivityType: PhysicalActivityTypeEntity;
}
