import { PrimaryGeneratedColumn } from 'typeorm';

export abstract class AbstractBaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
}
