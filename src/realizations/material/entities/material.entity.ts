import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { AbstractBaseEntity } from 'src/realizations/abstract-base-entity';
import { ConditionEntity } from 'src/realizations/condition/entities/condition.entity';
import { EstimationEntity } from 'src/realizations/estimation/entities/estimation.entity';
import { GlueTypeEntity } from 'src/realizations/glue-type/entities/glue-type.entity';
import { HomeostasisFunctionEntity } from 'src/realizations/homeostasis-function/entities/homeostasis-function.entity';
import { ImageEntity } from 'src/realizations/image/entities/image.entity';
import { LayerEntity } from 'src/realizations/layer/entities/layer.entity';
import { MembraneLayerPolymerTypeEntity } from 'src/realizations/membrane-layer-polymer-type/entities/membrane-layer-polymer-type.entity';
import { ProductionMethodEntity } from 'src/realizations/production-method/entities/production-method.entity';
import { ReliabilityFunctionEntity } from 'src/realizations/reliability-function/entities/reliability-function.entity';
import { UserEntity } from 'src/realizations/user/entities/user.entity';
import { WaterproofFunctionEntity } from 'src/realizations/waterproof-function/entities/waterproof-function.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';

@Entity('Material')
export class MaterialEntity extends AbstractBaseEntity {
  @ApiProperty({ type: String })
  @Column()
  name: string;

  @ApiProperty({ type: String })
  @Column()
  manufacturer: string;

  @ApiProperty({ type: String })
  @Column()
  description: string;

  @ApiProperty({ type: Number })
  @Column()
  depth: number;

  @ApiProperty({ type: () => ConditionEntity })
  @OneToOne(() => ConditionEntity, (condition) => condition.material, {
    eager: true,
  })
  condition: ConditionEntity;

  @ApiProperty({ type: () => WaterproofFunctionEntity })
  @OneToOne(
    () => WaterproofFunctionEntity,
    (waterproofFunction) => waterproofFunction.material,
    { eager: true },
  )
  waterproofFunction: WaterproofFunctionEntity;

  @ApiProperty({ type: () => HomeostasisFunctionEntity })
  @OneToOne(
    () => HomeostasisFunctionEntity,
    (homeostasisFunction) => homeostasisFunction.material,
    { eager: true },
  )
  homeostasisFunction: HomeostasisFunctionEntity;

  @ApiProperty({ type: () => ReliabilityFunctionEntity })
  @OneToOne(
    () => ReliabilityFunctionEntity,
    (reliabilityFunction) => reliabilityFunction.material,
    { eager: true },
  )
  reliabilityFunction: ReliabilityFunctionEntity;

  @ApiProperty({ type: () => EstimationEntity })
  @OneToOne(() => EstimationEntity, (estimation) => estimation.material, {
    eager: true,
  })
  estimation: EstimationEntity;

  @ApiProperty({ type: () => LayerEntity, isArray: true })
  @OneToMany(() => LayerEntity, (layer) => layer.material, { eager: true })
  layers: LayerEntity[];

  @ApiProperty({ type: () => String, isArray: true })
  @OneToMany(() => ImageEntity, (image) => image.material, { eager: true })
  @Transform(({ value }) => {
    return value.map((imageEntity) => imageEntity.webContentLink);
  })
  images: ImageEntity[];

  @ManyToOne(() => UserEntity, (user) => user.materials)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @ApiProperty({ type: () => ProductionMethodEntity })
  @ManyToOne(() => ProductionMethodEntity, { eager: true })
  @JoinColumn({ name: 'productionMethod_id' })
  productionMethod: ProductionMethodEntity;

  @ApiProperty({ type: () => MembraneLayerPolymerTypeEntity })
  @ManyToOne(() => MembraneLayerPolymerTypeEntity, { eager: true })
  @JoinColumn({ name: 'membraneLayerPolymerType_id' })
  membraneLayerPolymerType: MembraneLayerPolymerTypeEntity;

  @ApiProperty({ type: () => GlueTypeEntity })
  @ManyToOne(() => GlueTypeEntity, { eager: true })
  @JoinColumn({ name: 'glueType_id' })
  glueType: GlueTypeEntity;
}
