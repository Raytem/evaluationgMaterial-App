import { AbstractBaseEntity } from 'src/realizations/abstract-base-entity';
import { Column, Entity } from 'typeorm';

@Entity('GlueType')
export class GlueTypeEntity extends AbstractBaseEntity {
  @Column()
  name: string;
}
