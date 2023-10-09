import { AbrasionTypeService } from '../abrasion-type/abrasion-type.service';
import { BendingTypeService } from '../bending-type/bending-type.service';
import { GlueTypeService } from '../glue-type/glue-type.service';
import { LayerTypeService } from '../layer-type/layer-type.service';
import { MembraneLayerPolymerTypeService } from '../membrane-layer-polymer-type/membrane-layer-polymer-type.service';
import { PhysicalActivityTypeService } from '../physical-activity-type/physical-activity-type.service';
import { ProductionMethodService } from '../production-method/production-method.service';
import { WashingTypeService } from '../washing-type/washing-type.service';
import { ReturnAllTypesDto } from './dto/return-all-types.dto';
export declare class AllTypesService {
    private abrasionTypeService;
    private bendingTypeService;
    private glueTypeService;
    private layerTypeService;
    private membraneLayerPolymerTypeService;
    private physicalActivityTypeService;
    private productionMethodService;
    private washingTypeService;
    constructor(abrasionTypeService: AbrasionTypeService, bendingTypeService: BendingTypeService, glueTypeService: GlueTypeService, layerTypeService: LayerTypeService, membraneLayerPolymerTypeService: MembraneLayerPolymerTypeService, physicalActivityTypeService: PhysicalActivityTypeService, productionMethodService: ProductionMethodService, washingTypeService: WashingTypeService);
    findAll(): Promise<ReturnAllTypesDto>;
}
