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
  @Column()
  m1s: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  m2s: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  s0_1: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  t_1: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  waterPermeability_calculated: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  waterPermeability_relativeValuation: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  waterPermeability_base: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  waterPermeability_weight: number;

  //------

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  m1min: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  m2min: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  m1max: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  m2max: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  s0_2: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  t_2: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  waterPermeabilityDynamicCriteria_calculated: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  waterPermeabilityDynamicCriteria_relativeValuation: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  waterPermeabilityDynamicCriteria_base: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  waterPermeabilityDynamicCriteria_weight: number;

  //------

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  t0s: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  s: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  m: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  totalThermalResistance: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  totalThermalResistance_calculated: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  totalThermalResistance_base: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  totalThermalResistance_relativeValuation: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  totalThermalResistance_weight: number;

  //------

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  minPressureDiff: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  maxPressureDiff: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  estimatedPressureDiff: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  avgRangePressureVal: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  comfTempInsideClothes: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  comfHumidityInsideClothes: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  minOutdoorTemp: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  maxOutdoorTemp: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  minOutdoorHumidity: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
  maxOutdoorHumidity: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column()
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
  @Column()
  avgWeightedEstimate: number;
}
