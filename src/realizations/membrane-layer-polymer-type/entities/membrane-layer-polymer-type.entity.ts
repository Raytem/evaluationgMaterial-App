import { AbstractBaseEntity } from 'src/realizations/abstract-base-entity';
import { Column, Entity } from 'typeorm';

@Entity('MembraneLayerPolymerType')
export class MembraneLayerPolymerTypeEntity extends AbstractBaseEntity {
  @Column()
  name: string;
}
