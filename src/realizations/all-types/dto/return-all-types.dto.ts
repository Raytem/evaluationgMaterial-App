import { ApiProperty } from '@nestjs/swagger';
import { AbrasionTypeEntity } from 'src/realizations/abrasion-type/entities/abrasion-type.entity';
import { BendingTypeEntity } from 'src/realizations/bending-type/entities/bending-type.entity';
import { GlueTypeEntity } from 'src/realizations/glue-type/entities/glue-type.entity';
import { LayerTypeEntity } from 'src/realizations/layer-type/entities/layer-type.entity';
import { MembraneLayerPolymerTypeEntity } from 'src/realizations/membrane-layer-polymer-type/entities/membrane-layer-polymer-type.entity';
import { PhysicalActivityTypeEntity } from 'src/realizations/physical-activity-type/entities/physical-activity-type.entity';
import { ProductionMethodEntity } from 'src/realizations/production-method/entities/production-method.entity';
import { WashingTypeEntity } from 'src/realizations/washing-type/entities/washing-type.entity';

export class ReturnAllTypesDto {
  @ApiProperty({ type: () => AbrasionTypeEntity, isArray: true })
  abrasionTypes: AbrasionTypeEntity[];

  @ApiProperty({ type: () => BendingTypeEntity, isArray: true })
  bendingTypes: BendingTypeEntity[];

  @ApiProperty({ type: () => GlueTypeEntity, isArray: true })
  glueTypes: GlueTypeEntity[];

  @ApiProperty({ type: () => LayerTypeEntity, isArray: true })
  layerTypes: LayerTypeEntity[];

  @ApiProperty({ type: () => MembraneLayerPolymerTypeEntity, isArray: true })
  membraneLayerPolymerTypes: MembraneLayerPolymerTypeEntity[];

  @ApiProperty({ type: () => PhysicalActivityTypeEntity, isArray: true })
  physicalActivityTypes: PhysicalActivityTypeEntity[];

  @ApiProperty({ type: () => ProductionMethodEntity, isArray: true })
  productionMethods: ProductionMethodEntity[];

  @ApiProperty({ type: () => WashingTypeEntity, isArray: true })
  washingTypes: WashingTypeEntity[];
}
