import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber, IsPositive, IsString } from 'class-validator';
import { AbstractBaseEntity } from 'src/realizations/abstract-base-entity';
import { MaterialEntity } from 'src/realizations/material/entities/material.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity('ReliabilityFunction')
export class ReliabilityFunctionEntity extends AbstractBaseEntity {
  @OneToOne(() => MaterialEntity, (material) => material.reliabilityFunction, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'material_id' })
  material: MaterialEntity;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  maxWaterResistanceLvl: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  relativeBlottingPressureAfterLoad_experimental_1: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  relativeBlottingPressureAfterLoad_calculated: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  relativeBlottingPressureAfterLoad_base: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  relativeBlottingPressureAfterLoad_relativeValuation: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  relativeBlottingPressureAfterLoad_weight: number;

  //------

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  relativeWaterResistanceAfterLoad_experimental_1: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  relativeWaterResistanceAfterLoad_calculated: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  relativeWaterResistanceAfterLoad_base: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  relativeWaterResistanceAfterLoad_relativeValuation: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  relativeWaterResistanceAfterLoad_weight: number;

  //------

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  relativeBlottingTimeAfterLoad_experimental_1: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  relativeBlottingTimeAfterLoad_calculated: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  relativeBlottingTimeAfterLoad_base: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  relativeBlottingTimeAfterLoad_relativeValuation: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  relativeBlottingTimeAfterLoad_weight: number;

  //------

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  waterproofRealizationCriteriaAfterLoad_experimental_1: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  waterproofRealizationCriteriaAfterLoad_experimental_2: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  waterproofRealizationCriteriaAfterLoad_calculated: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  waterproofRealizationCriteriaAfterLoad_base: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  waterproofRealizationCriteriaAfterLoad_relativeValuation: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  waterproofRealizationCriteriaAfterLoad_weight: number;

  //------

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  waterproofFunctionResource_experimental_1: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  waterproofFunctionResource_experimental_2: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  waterproofFunctionResource_calculated: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  waterproofFunctionResource_base: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  waterproofFunctionResource_relativeValuation: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  waterproofFunctionResource_weight: number;

  @ApiProperty({ type: Number })
  @IsInt()
  @IsNumber()
  @Column()
  impactCyclesCnt: number;

  @ApiProperty({ type: String })
  @IsString()
  @Column()
  comment: string;

  @ApiProperty({ type: String })
  @IsString()
  @Column()
  equipment: string;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  avgWeightedEstimate: number;
}
