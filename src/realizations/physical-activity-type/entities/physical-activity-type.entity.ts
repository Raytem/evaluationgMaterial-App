import { AbstractBaseEntity } from 'src/realizations/abstract-base-entity';
import { Column, Entity } from 'typeorm';

@Entity('PhysicalActivityType')
export class PhysicalActivityTypeEntity extends AbstractBaseEntity {
  @Column()
  name: string;

  @Column()
  description: string;
}
