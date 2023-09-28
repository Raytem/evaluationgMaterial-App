import { ApiProperty } from '@nestjs/swagger';
import { AbstractBaseEntity } from 'src/realizations/abstract-base-entity';
import { LayerTypeEntity } from 'src/realizations/layer-type/entities/layer-type.entity';
import { MaterialEntity } from 'src/realizations/material/entities/material.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity('Layer')
export class LayerEntity extends AbstractBaseEntity {
  @ApiProperty({ type: Number })
  @Column()
  indexNum: number;

  @ApiProperty({ type: () => LayerTypeEntity })
  @ManyToOne(() => LayerTypeEntity, (layerType) => layerType.layers, {
    eager: true,
  })
  @JoinColumn({ name: 'layerType_id' })
  layerType: LayerTypeEntity;

  @ManyToOne(() => MaterialEntity, (material) => material.layers, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'material_id' })
  material: MaterialEntity;
}
