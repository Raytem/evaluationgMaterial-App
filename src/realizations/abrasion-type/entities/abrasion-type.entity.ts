import { AbstractBaseEntity } from 'src/realizations/abstract-base-entity';
import { Column, Entity } from 'typeorm';

@Entity('AbrasionType')
export class AbrasionTypeEntity extends AbstractBaseEntity {
  @Column()
  name: string;
}
