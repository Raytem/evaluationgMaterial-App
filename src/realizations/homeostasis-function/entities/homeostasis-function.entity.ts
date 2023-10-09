import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { AbstractBaseEntity } from 'src/realizations/abstract-base-entity';
import { MaterialEntity } from 'src/realizations/material/entities/material.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity('HomeostasisFunction')
export class HomeostasisFunctionEntity extends AbstractBaseEntity {
  @OneToOne(() => MaterialEntity, (material) => material.homeostasisFunction, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'material_id' })
  material: MaterialEntity;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  sampleSurfaceArea: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  m1s: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  m2s: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  s0_1: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  t_1: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  waterPermeability_recommended: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  waterPermeability_calculated: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  waterPermeability_relativeValuation: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  waterPermeability_base: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  waterPermeability_weight: number;

  //------

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  m1min: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  m2min: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  m1max: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  m2max: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  s0_2: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  t_2: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  waterPermeabilityDynamicCriteria_recommended: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  waterPermeabilityDynamicCriteria_calculated: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  waterPermeabilityDynamicCriteria_relativeValuation: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  waterPermeabilityDynamicCriteria_base: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  waterPermeabilityDynamicCriteria_weight: number;

  //------

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  tos: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  s: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  m: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  totalThermalResistance_recommended: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  totalThermalResistance_calculated: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  totalThermalResistance_base: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  totalThermalResistance_relativeValuation: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  totalThermalResistance_weight: number;

  //------

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  minPressureDiff: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  maxPressureDiff: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  estimatedPressureDiff: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  avgRangePressureVal: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  comfTempInsideClothes: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  comfHumidityInsideClothes: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  minOutdoorTemp: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  maxOutdoorTemp: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  minOutdoorHumidity: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  maxOutdoorHumidity: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  avgOutdoorAirSpeed: number;

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
