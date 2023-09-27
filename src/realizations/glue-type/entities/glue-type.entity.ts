import { AbstractBaseEntity } from 'src/realizations/abstract-base-entity';
import { MaterialEntity } from 'src/realizations/material/entities/material.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('GlueType')
export class GlueTypeEntity extends AbstractBaseEntity {
  @Column()
  name: string;

  @OneToMany(() => MaterialEntity, (material) => material.glueType)
  material: MaterialEntity;
}
