import { AbstractBaseEntity } from 'src/realizations/abstract-base-entity';
import { Column, Entity } from 'typeorm';

@Entity('WashingType')
export class WashingTypeEntity extends AbstractBaseEntity {
  @Column()
  name: string;
}
