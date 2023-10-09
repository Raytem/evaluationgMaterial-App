import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { AbstractBaseEntity } from 'src/realizations/abstract-base-entity';
import { MaterialEntity } from 'src/realizations/material/entities/material.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity('Estimation')
export class EstimationEntity extends AbstractBaseEntity {
  @OneToOne(() => MaterialEntity, (material) => material.estimation, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'material_id' })
  material: MaterialEntity;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  waterproofFunction_weight: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  homeostasisFunction_weight: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  reliabilityFunction_weight: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  avgWeightedArithmetic: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @Column({ type: 'double precision' })
  avgWeightedGeometric: number;
}
