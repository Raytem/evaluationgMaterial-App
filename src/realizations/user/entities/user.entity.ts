import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { AbstractBaseEntity } from 'src/realizations/abstract-base-entity';
import { MaterialEntity } from 'src/realizations/material/entities/material.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('User')
export class UserEntity extends AbstractBaseEntity {
  @ApiProperty({ type: String })
  @Column()
  fio: string;

  @ApiProperty({ type: String })
  @Column({ unique: true })
  email: string;

  @Exclude()
  @Column()
  password: string;

  @ApiProperty({ type: Boolean })
  @Column({ default: false })
  isAdmin: boolean;

  @OneToMany(() => MaterialEntity, (material) => material.user)
  materials: MaterialEntity[];

  constructor(partial: Partial<UserEntity>) {
    super();
    Object.assign(this, partial);
  }
}
