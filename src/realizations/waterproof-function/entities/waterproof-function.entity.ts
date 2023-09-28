import { ApiProperty } from '@nestjs/swagger';
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
  @Column()
  materialBlottingPressure_experimental_1: number;

  @ApiProperty({ type: Number })
  @Column()
  materialBlottingPressure_calculated: number;

  @ApiProperty({ type: Number })
  @Column()
  materialBlottingPressure_base: number;

  @ApiProperty({ type: Number })
  @Column()
  materialBlottingPressure_relativeValuation: number;

  @ApiProperty({ type: Number })
  @Column()
  materialBlottingPressure_weight: number;

  //------

  @ApiProperty({ type: Number })
  @Column()
  waterproof_experimental_1: number;

  @ApiProperty({ type: Number })
  @Column()
  waterproof_calculated: number;

  @ApiProperty({ type: Number })
  @Column()
  waterproof_base: number;

  @ApiProperty({ type: Number })
  @Column()
  waterproof_relativeValuation: number;

  @ApiProperty({ type: Number })
  @Column()
  waterproof_weight: number;

  //------

  @ApiProperty({ type: Number })
  @Column()
  materialBlottingTime_experimental_1: number;

  @ApiProperty({ type: Number })
  @Column()
  materialBlottingTime_calculated: number;

  @ApiProperty({ type: Number })
  @Column()
  materialBlottingTime_base: number;

  @ApiProperty({ type: Number })
  @Column()
  materialBlottingTime_relativeValuation: number;

  @ApiProperty({ type: Number })
  @Column()
  materialBlottingTime_weight: number;

  //------

  @ApiProperty({ type: Number })
  @Column()
  waterproofRealizationCriteria_experimental_1: number;

  @ApiProperty({ type: Number })
  @Column()
  waterproofRealizationCriteria_experimental_2: number;

  @ApiProperty({ type: Number })
  @Column()
  waterproofRealizationCriteria_calculated: number;

  @ApiProperty({ type: Number })
  @Column()
  waterproofRealizationCriteria_base: number;

  @ApiProperty({ type: Number })
  @Column()
  waterproofRealizationCriteria_relativeValuation: number;

  @ApiProperty({ type: Number })
  @Column()
  waterproofRealizationCriteria_weight: number;

  //------

  @ApiProperty({ type: Number })
  @Column()
  dynamicWaterproofCriteria_experimental_1: number;

  @ApiProperty({ type: Number })
  @Column()
  dynamicWaterproofCriteria_experimental_2: number;

  @ApiProperty({ type: Number })
  @Column()
  dynamicWaterproofCriteria_experimental_3: number;

  @ApiProperty({ type: Number })
  @Column()
  dynamicWaterproofCriteria_experimental_4: number;

  @ApiProperty({ type: Number })
  @Column()
  dynamicWaterproofCriteria_calculated: number;

  @ApiProperty({ type: Number })
  @Column()
  dynamicWaterproofCriteria_base: number;

  @ApiProperty({ type: Number })
  @Column()
  dynamicWaterproofCriteria_relativeValuation: number;

  @ApiProperty({ type: Number })
  @Column()
  dynamicWaterproofCriteria_weight: number;

  //------

  @ApiProperty({ type: Number })
  @Column()
  hydrostaticPressureIncreaseSpeedMin: number;

  @ApiProperty({ type: Number })
  @Column()
  hydrostaticPressure: number;

  @ApiProperty({ type: Number })
  @Column()
  waterproofTime: number;

  @ApiProperty({ type: String })
  @Column()
  equipment: string;

  @ApiProperty({ type: String })
  @Column()
  comment: string;

  @ApiProperty({ type: Number })
  @Column()
  avgWeightedEstimate: number;
}
