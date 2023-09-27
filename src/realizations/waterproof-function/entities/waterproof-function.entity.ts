import { AbstractBaseEntity } from 'src/realizations/abstract-base-entity';
import { MaterialEntity } from 'src/realizations/material/entities/material.entity';
import { Column, Entity, OneToOne } from 'typeorm';

@Entity('WaterproofFunction')
export class WaterproofFunctionEntity extends AbstractBaseEntity {
  @OneToOne(() => MaterialEntity, (material) => material.waterproofFunction, {
    onDelete: 'CASCADE',
  })
  material: MaterialEntity;

  @Column()
  materialBlottingPressure_experimental_1: number;

  @Column()
  materialBlottingPressure_calculated: number;

  @Column()
  materialBlottingPressure_base: number;

  @Column()
  materialBlottingPressure_relativeValuation: number;

  @Column()
  materialBlottingPressure_weight: number;

  //------

  @Column()
  waterproof_experimental_1: number;

  @Column()
  waterproof_calculated: number;

  @Column()
  waterproof_base: number;

  @Column()
  waterproof_relativeValuation: number;

  @Column()
  waterproof_weight: number;

  //------

  @Column()
  materialBlottingTime_experimental_1: number;

  @Column()
  materialBlottingTime_calculated: number;

  @Column()
  materialBlottingTime_base: number;

  @Column()
  materialBlottingTime_relativeValuation: number;

  @Column()
  materialBlottingTime_weight: number;

  //------

  @Column()
  waterproofRealizationCriteria_experimental_1: number;

  @Column()
  waterproofRealizationCriteria_experimental_2: number;

  @Column()
  waterproofRealizationCriteria_calculated: number;

  @Column()
  waterproofRealizationCriteria_base: number;

  @Column()
  waterproofRealizationCriteria_relativeValuation: number;

  @Column()
  waterproofRealizationCriteria_weight: number;

  //------

  @Column()
  dynamicWaterproofCriteria_experimental_1: number;

  @Column()
  dynamicWaterproofCriteria_experimental_2: number;

  @Column()
  dynamicWaterproofCriteria_experimental_3: number;

  @Column()
  dynamicWaterproofCriteria_experimental_4: number;

  @Column()
  dynamicWaterproofCriteria_calculated: number;

  @Column()
  dynamicWaterproofCriteria_base: number;

  @Column()
  dynamicWaterproofCriteria_relativeValuation: number;

  @Column()
  dynamicWaterproofCriteria_weight: number;

  //------

  @Column()
  hydrostaticPressureIncreaseSpeedMin: number;

  @Column()
  hydrostaticPressure: number;

  @Column()
  waterproofTime: number;

  @Column()
  equipment: string;

  @Column()
  comment: string;

  @Column()
  avgWeightedEstimate: number;
}
