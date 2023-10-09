import { Module } from '@nestjs/common';
import { AllTypesService } from './all-types.service';
import { AllTypesController } from './all-types.controller';
import { AbrasionTypeModule } from '../abrasion-type/abrasion-type.module';
import { BendingTypeModule } from '../bending-type/bending-type.module';
import { GlueTypeModule } from '../glue-type/glue-type.module';
import { LayerTypeModule } from '../layer-type/layer-type.module';
import { MembraneLayerPolymerTypeModule } from '../membrane-layer-polymer-type/membrane-layer-polymer-type.module';
import { PhysicalActivityTypeModule } from '../physical-activity-type/physical-activity-type.module';
import { ProductionMethodModule } from '../production-method/production-method.module';
import { WashingTypeModule } from '../washing-type/washing-type.module';

@Module({
  imports: [
    AbrasionTypeModule,
    BendingTypeModule,
    GlueTypeModule,
    LayerTypeModule,
    MembraneLayerPolymerTypeModule,
    PhysicalActivityTypeModule,
    ProductionMethodModule,
    WashingTypeModule,
  ],
  controllers: [AllTypesController],
  providers: [AllTypesService],
})
export class AllTypesModule {}
