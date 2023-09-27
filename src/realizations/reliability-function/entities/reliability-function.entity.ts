import { AbstractBaseEntity } from 'src/realizations/abstract-base-entity';
import { MaterialEntity } from 'src/realizations/material/entities/material.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity('ReliabilityFunction')
export class ReliabilityFunctionEntity extends AbstractBaseEntity {
  @OneToOne(() => MaterialEntity, (material) => material.reliabilityFunction, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'material_id' })
  material: MaterialEntity;

  @Column()
  comment: string;

  @Column()
  equipment: string;

  @Column()
  avgWeightedEstimate: number;
}
