import { AbstractBaseEntity } from 'src/realizations/abstract-base-entity';
import { Column, Entity } from 'typeorm';

@Entity('LayerType')
export class LayerTypeEntity extends AbstractBaseEntity {
  @Column()
  name: string;
}
