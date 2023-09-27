import { AbstractBaseEntity } from 'src/realizations/abstract-base-entity';
import { Column, Entity } from 'typeorm';

@Entity('BendingType')
export class BendingTypeEntity extends AbstractBaseEntity {
  @Column()
  name: string;
}
