import { ApiProperty } from '@nestjs/swagger';
import { AbrasionTypeEntity } from 'src/realizations/abrasion-type/entities/abrasion-type.entity';
import { AbstractBaseEntity } from 'src/realizations/abstract-base-entity';
import { BendingTypeEntity } from 'src/realizations/bending-type/entities/bending-type.entity';
import { MaterialEntity } from 'src/realizations/material/entities/material.entity';
import { PhysicalActivityTypeEntity } from 'src/realizations/physical-activity-type/entities/physical-activity-type.entity';
import { WashingEntity } from 'src/realizations/washing/entities/washing.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';

@Entity('Condition')
export class ConditionEntity extends AbstractBaseEntity {
  @ApiProperty({ type: Boolean })
  @Column()
  isPositive: boolean;

  @ApiProperty({ type: Number })
  @Column()
  minAirTemp: number;

  @ApiProperty({ type: Number })
  @Column()
  maxAirHumidity: number;

  @ApiProperty({ type: Number })
  @Column()
  avgAirSpeed: number;

  @ApiProperty({ type: Number })
  @Column()
  residenceTime: number;

  @ApiProperty({ type: Number, required: false })
  @Column({ nullable: true })
  torsionAngle: number;

  @ApiProperty({ type: Number, required: false })
  @Column({ nullable: true })
  stretchingCompression: number;

  @OneToOne(() => MaterialEntity, (material) => material.condition, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'material_id' })
  material: MaterialEntity;

  @ApiProperty({ type: () => AbrasionTypeEntity })
  @ManyToOne(() => AbrasionTypeEntity, { eager: true })
  @JoinColumn({ name: 'abrasionType_id' })
  abrasionType: AbrasionTypeEntity;

  @OneToOne(() => WashingEntity, (washing) => washing.condition, {
    eager: true,
  })
  washing: WashingEntity;

  @ApiProperty({ type: () => BendingTypeEntity })
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
