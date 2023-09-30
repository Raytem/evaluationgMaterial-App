import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { AbstractBaseEntity } from 'src/realizations/abstract-base-entity';
import { MaterialEntity } from 'src/realizations/material/entities/material.entity';
import { getWebContentLink } from 'src/utils/getWebContentLink';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity('Image')
export class ImageEntity extends AbstractBaseEntity {
  @ApiProperty({ type: String })
  @Column()
  name: string;

  @ApiProperty({ type: String })
  @Column()
  folderName: string;

  @ApiProperty({ name: 'webContentLink', type: String })
  @Expose()
  get webContentLink() {
    return getWebContentLink(this.name, this.folderName);
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
