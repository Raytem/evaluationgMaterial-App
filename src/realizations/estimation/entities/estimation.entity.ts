import { AbstractBaseEntity } from 'src/realizations/abstract-base-entity';
import { MaterialEntity } from 'src/realizations/material/entities/material.entity';
import { Entity, OneToOne } from 'typeorm';

@Entity('Estimation')
export class EstimationEntity extends AbstractBaseEntity {
  @OneToOne(() => MaterialEntity, (material) => material.estimation, {
    onDelete: 'CASCADE',
  })
  material: MaterialEntity;
}
