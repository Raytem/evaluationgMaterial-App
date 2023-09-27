import { Expose } from 'class-transformer';
import { AbstractBaseEntity } from 'src/realizations/abstract-base-entity';
import { MaterialEntity } from 'src/realizations/material/entities/material.entity';
import { getWebContentLink } from 'src/utils/getWebContentLink';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity('Image')
export class ImageEntity extends AbstractBaseEntity {
  @Column()
  name: string;

  @Expose()
  get webContentLink() {
    return getWebContentLink(this.name);
  }

  @ManyToOne(() => MaterialEntity, (material) => material.images, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'material_id' })
  material: MaterialEntity;

  constructor(partial?: Partial<ImageEntity>) {
    super();
    Object.assign(this, partial);
  }
}
