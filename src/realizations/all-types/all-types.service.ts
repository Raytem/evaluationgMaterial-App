import { Injectable } from '@nestjs/common';
import { AbrasionTypeService } from '../abrasion-type/abrasion-type.service';
import { BendingTypeService } from '../bending-type/bending-type.service';
import { GlueTypeService } from '../glue-type/glue-type.service';
import { LayerTypeService } from '../layer-type/layer-type.service';
import { MembraneLayerPolymerTypeService } from '../membrane-layer-polymer-type/membrane-layer-polymer-type.service';
import { PhysicalActivityTypeService } from '../physical-activity-type/physical-activity-type.service';
import { ProductionMethodService } from '../production-method/production-method.service';
import { WashingTypeService } from '../washing-type/washing-type.service';
import { ReturnAllTypesDto } from './dto/return-all-types.dto';

@Injectable()
export class AllTypesService {
  constructor(
    private abrasionTypeService: AbrasionTypeService,

    private bendingTypeService: BendingTypeService,

    private glueTypeService: GlueTypeService,

    private layerTypeService: LayerTypeService,

    private membraneLayerPolymerTypeService: MembraneLayerPolymerTypeService,

    private physicalActivityTypeService: PhysicalActivityTypeService,

    private productionMethodService: ProductionMethodService,

    private washingTypeService: WashingTypeService,
  ) {}

  async findAll(): Promise<ReturnAllTypesDto> {
    const allTypes = {
      abrasionTypes: await this.abrasionTypeService.findAll(),
      bendingTypes: await this.bendingTypeService.findAll(),
      glueTypes: await this.glueTypeService.findAll(),
      layerTypes: await this.layerTypeService.findAll(),
      membraneLayerPolymerTypes:
        await this.membraneLayerPolymerTypeService.findAll(),
      physicalActivityTypes: await this.physicalActivityTypeService.findAll(),
      productionMethods: await this.productionMethodService.findAll(),
      washingTypes: await this.washingTypeService.findAll(),
    };

    return allTypes;
  }
}
