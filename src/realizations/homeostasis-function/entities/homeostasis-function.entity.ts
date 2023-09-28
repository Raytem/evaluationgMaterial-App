import { ApiProperty } from '@nestjs/swagger';
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
  @Column()
  m1s: number;

  @ApiProperty({ type: Number })
  @Column()
  m2s: number;

  @ApiProperty({ type: Number })
  @Column()
  s0_1: number;

  @ApiProperty({ type: Number })
  @Column()
  t_1: number;

  @ApiProperty({ type: Number })
  @Column()
  waterPermeability_calculated: number;

  @ApiProperty({ type: Number })
  @Column()
  waterPermeability_relativeValuation: number;

  @ApiProperty({ type: Number })
  @Column()
  waterPermeability_base: number;

  @ApiProperty({ type: Number })
  @Column()
  waterPermeability_weight: number;

  //------

  @ApiProperty({ type: Number })
  @Column()
  m1min: number;

  @ApiProperty({ type: Number })
  @Column()
  m2min: number;

  @ApiProperty({ type: Number })
  @Column()
  m1max: number;

  @ApiProperty({ type: Number })
  @Column()
  m2max: number;

  @ApiProperty({ type: Number })
  @Column()
  s0_2: number;

  @ApiProperty({ type: Number })
  @Column()
  t_2: number;

  @ApiProperty({ type: Number })
  @Column()
  waterPermeabilityDynamicCriteria_calculated: number;

  @ApiProperty({ type: Number })
  @Column()
  waterPermeabilityDynamicCriteria_relativeValuation: number;

  @ApiProperty({ type: Number })
  @Column()
  waterPermeabilityDynamicCriteria_base: number;

  @ApiProperty({ type: Number })
  @Column()
  waterPermeabilityDynamicCriteria_weight: number;

  //------

  @ApiProperty({ type: Number })
  @Column()
  t0s: number;

  @ApiProperty({ type: Number })
  @Column()
  s: number;

  @ApiProperty({ type: Number })
  @Column()
  m: number;

  @ApiProperty({ type: Number })
  @Column()
  totalThermalResistance: number;

  @ApiProperty({ type: Number })
  @Column()
  totalThermalResistance_calculated: number;

  @ApiProperty({ type: Number })
  @Column()
  totalThermalResistance_base: number;

  @ApiProperty({ type: Number })
  @Column()
  totalThermalResistance_relativeValuation: number;

  @ApiProperty({ type: Number })
  @Column()
  totalThermalResistance_weight: number;

  //------

  @ApiProperty({ type: Number })
  @Column()
  minPressureDiff: number;

  @ApiProperty({ type: Number })
  @Column()
  maxPressureDiff: number;

  @ApiProperty({ type: Number })
  @Column()
  estimatedPressureDiff: number;

  @ApiProperty({ type: Number })
  @Column()
  avgRangePressureVal: number;

  @ApiProperty({ type: Number })
  @Column()
  comfTempInsideClothes: number;

  @ApiProperty({ type: Number })
  @Column()
  comfHumidityInsideClothes: number;

  @ApiProperty({ type: Number })
  @Column()
  minOutdoorTemp: number;

  @ApiProperty({ type: Number })
  @Column()
  maxOutdoorTemp: number;

  @ApiProperty({ type: Number })
  @Column()
  minOutdoorHumidity: number;

  @ApiProperty({ type: Number })
  @Column()
  maxOutdoorHumidity: number;

  @ApiProperty({ type: Number })
  @Column()
  avgOutdoorAirSpeed: number;

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
