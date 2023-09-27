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

  @Column()
  m1s: number;

  @Column()
  m2s: number;

  @Column()
  s0_1: number;

  @Column()
  t_1: number;

  @Column()
  waterPermeability_calculated: number;

  @Column()
  waterPermeability_relativeValuation: number;

  @Column()
  waterPermeability_base: number;

  @Column()
  waterPermeability_weight: number;

  //------

  @Column()
  m1min: number;

  @Column()
  m2min: number;

  @Column()
  m1max: number;

  @Column()
  m2max: number;

  @Column()
  s0_2: number;

  @Column()
  t_2: number;

  @Column()
  waterPermeabilityDynamicCriteria_calculated: number;

  @Column()
  waterPermeabilityDynamicCriteria_relativeValuation: number;

  @Column()
  waterPermeabilityDynamicCriteria_base: number;

  @Column()
  waterPermeabilityDynamicCriteria_weight: number;

  //------

  @Column()
  t0s: number;

  @Column()
  s: number;

  @Column()
  m: number;

  @Column()
  totalThermalResistance: number;

  @Column()
  totalThermalResistance_сalculated: number;

  @Column()
  totalThermalResistance_base: number;

  @Column()
  totalThermalResistance_relativeValuation: number;

  @Column()
  totalThermalResistance_weight: number;

  //------

  @Column()
  minPressureDiff: number;

  @Column()
  maxPressureDiff: number;

  @Column()
  estimatedPressureDiff: number;

  @Column()
  avgRangePressureVal: number;

  @Column()
  comfTempInsideClothes: number;

  @Column()
  comfHumidityInsideClothes: number;

  @Column()
  minOutdoorTemp: number;

  @Column()
  maxOusideTemp: number;

  @Column()
  minOutdoorHumidity: number;

  @Column()
  maxOutdoorHumidity: number;

  @Column()
  avgOutdoorAirSpeed: number;

  @Column()
  equipment: string;

  @Column()
  comment: string;

  @Column()
  avgWeightedEstimate: number;
}
