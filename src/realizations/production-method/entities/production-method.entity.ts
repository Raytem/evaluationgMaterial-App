import { AbstractBaseEntity } from 'src/realizations/abstract-base-entity';
import { Column, Entity } from 'typeorm';

@Entity('ProductionMethod')
export class ProductionMethodEntity extends AbstractBaseEntity {
  @Column()
  name: string;
}
