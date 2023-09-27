import { AbstractBaseEntity } from 'src/realizations/abstract-base-entity';
import { MaterialEntity } from 'src/realizations/material/entities/material.entity';
import { Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity('Estimation')
export class EstimationEntity extends AbstractBaseEntity {
  @OneToOne(() => MaterialEntity, (material) => material.estimation, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'material_id' })
  material: MaterialEntity;
}
