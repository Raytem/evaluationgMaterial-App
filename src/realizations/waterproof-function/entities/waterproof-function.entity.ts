import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { AbstractBaseEntity } from 'src/realizations/abstract-base-entity';
import { MaterialEntity } from 'src/realizations/material/entities/material.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity('WaterproofFunction')
export class WaterproofFunctionEntity extends AbstractBaseEntity {
  @OneToOne(() => MaterialEntity, (material) => material.waterproofFunction, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'material_id' })
  material: MaterialEntity;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  materialBlottingPressure_experimental_1: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  materialBlottingPressure_calculated: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  materialBlottingPressure_base: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  materialBlottingPressure_relativeValuation: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  materialBlottingPressure_weight: number;

  //------

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  waterproof_experimental_1: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  waterproof_calculated: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  waterproof_base: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  waterproof_relativeValuation: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  waterproof_weight: number;

  //------

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  materialBlottingTime_experimental_1: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  materialBlottingTime_calculated: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  materialBlottingTime_base: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  materialBlottingTime_relativeValuation: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  materialBlottingTime_weight: number;

  //------

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  waterproofRealizationCriteria_experimental_1: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  waterproofRealizationCriteria_experimental_2: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  waterproofRealizationCriteria_calculated: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  waterproofRealizationCriteria_base: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  waterproofRealizationCriteria_relativeValuation: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  waterproofRealizationCriteria_weight: number;

  //------

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  dynamicWaterproofCriteria_experimental_1: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  dynamicWaterproofCriteria_experimental_2: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  dynamicWaterproofCriteria_experimental_3: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  dynamicWaterproofCriteria_experimental_4: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  dynamicWaterproofCriteria_calculated: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  dynamicWaterproofCriteria_base: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  dynamicWaterproofCriteria_relativeValuation: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  dynamicWaterproofCriteria_weight: number;

  //------

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  hydrostaticPressureIncreaseSpeed: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  hydrostaticPressure: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  waterproofTime: number;

  @ApiProperty({ type: String })
  @IsString()
  @Column()
  equipment: string;

  @ApiProperty({ type: String })
  @IsString()
  @Column()
  comment: string;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  avgWeightedEstimate: number;
}
