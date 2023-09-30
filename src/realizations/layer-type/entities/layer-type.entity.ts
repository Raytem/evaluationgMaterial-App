import { ApiProperty } from '@nestjs/swagger';
import { AbstractBaseEntity } from 'src/realizations/abstract-base-entity';
import { LayerEntity } from 'src/realizations/layer/entities/layer.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('LayerType')
export class LayerTypeEntity extends AbstractBaseEntity {
  @ApiProperty({ type: String })
  @Column()
  name: string;

  @OneToMany(() => LayerEntity, (layer) => layer.layerType)
  layers: LayerEntity[];
}
