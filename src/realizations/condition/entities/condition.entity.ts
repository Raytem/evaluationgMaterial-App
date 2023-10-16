import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsInt,
  IsNumber,
  IsOptional,
  Max,
  Min,
  ValidateNested,
} from 'class-validator';
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
  @IsBoolean()
  @Column()
  isPositive: boolean;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  minAirTemp: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  maxAirTemp: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  minAirHumidity: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  maxAirHumidity: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  avgAirSpeed: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  residenceTime: number;

  @ApiProperty({ type: Number, required: false })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(180)
  @Column({ nullable: true })
  torsionAngle: number;

  @ApiProperty({ type: Number, required: false })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  @Column({ nullable: true })
  stretchingCompression: number;

  @OneToOne(() => MaterialEntity, (material) => material.condition, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'material_id' })
  material: MaterialEntity;

  @ApiProperty({ type: () => AbrasionTypeEntity })
  @IsOptional()
  @ManyToOne(() => AbrasionTypeEntity, { eager: true })
  @JoinColumn({ name: 'abrasionType_id' })
  abrasionType: AbrasionTypeEntity;

  @ApiProperty({ type: () => WashingEntity })
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

  @ApiProperty({ type: () => PhysicalActivityTypeEntity })
  @ManyToOne(() => PhysicalActivityTypeEntity, {
    eager: true,
  })
  @JoinColumn({ name: 'physicalActivityType_id' })
  physicalActivityType: PhysicalActivityTypeEntity;
}
