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
  @Column()
  materialBlottingPressure_experimental_1: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  materialBlottingPressure_calculated: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  materialBlottingPressure_base: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  materialBlottingPressure_relativeValuation: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  materialBlottingPressure_weight: number;

  //------

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  waterproof_experimental_1: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  waterproof_calculated: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  waterproof_base: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  waterproof_relativeValuation: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  waterproof_weight: number;

  //------

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  materialBlottingTime_experimental_1: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  materialBlottingTime_calculated: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  materialBlottingTime_base: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  materialBlottingTime_relativeValuation: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  materialBlottingTime_weight: number;

  //------

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  waterproofRealizationCriteria_experimental_1: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  waterproofRealizationCriteria_experimental_2: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  waterproofRealizationCriteria_calculated: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  waterproofRealizationCriteria_base: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  waterproofRealizationCriteria_relativeValuation: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  waterproofRealizationCriteria_weight: number;

  //------

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  dynamicWaterproofCriteria_experimental_1: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  dynamicWaterproofCriteria_experimental_2: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  dynamicWaterproofCriteria_experimental_3: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  dynamicWaterproofCriteria_experimental_4: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  dynamicWaterproofCriteria_calculated: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  dynamicWaterproofCriteria_base: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  dynamicWaterproofCriteria_relativeValuation: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  dynamicWaterproofCriteria_weight: number;

  //------

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  hydrostaticPressureIncreaseSpeed: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  hydrostaticPressure: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
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
  @Column()
  avgWeightedEstimate: number;
}
