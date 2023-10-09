import { AbrasionTypeEntity } from 'src/realizations/abrasion-type/entities/abrasion-type.entity';
import { BendingTypeEntity } from 'src/realizations/bending-type/entities/bending-type.entity';
import { GlueTypeEntity } from 'src/realizations/glue-type/entities/glue-type.entity';
import { LayerTypeEntity } from 'src/realizations/layer-type/entities/layer-type.entity';
import { MembraneLayerPolymerTypeEntity } from 'src/realizations/membrane-layer-polymer-type/entities/membrane-layer-polymer-type.entity';
import { PhysicalActivityTypeEntity } from 'src/realizations/physical-activity-type/entities/physical-activity-type.entity';
import { ProductionMethodEntity } from 'src/realizations/production-method/entities/production-method.entity';
import { WashingTypeEntity } from 'src/realizations/washing-type/entities/washing-type.entity';
export declare class ReturnAllTypesDto {
    abrasionTypes: AbrasionTypeEntity[];
    bendingTypes: BendingTypeEntity[];
    glueTypes: GlueTypeEntity[];
    layerTypes: LayerTypeEntity[];
    membraneLayerPolymerTypes: MembraneLayerPolymerTypeEntity[];
    physicalActivityTypes: PhysicalActivityTypeEntity[];
    productionMethods: ProductionMethodEntity[];
    washingTypes: WashingTypeEntity[];
}
