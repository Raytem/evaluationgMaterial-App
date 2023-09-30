import { Module } from '@nestjs/common';
import { MaterialService } from './material.service';
import { MaterialController } from './material.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaterialEntity } from './entities/material.entity';
import { GlueTypeModule } from '../glue-type/glue-type.module';
import { LayerTypeModule } from '../layer-type/layer-type.module';
import { MembraneLayerPolymerTypeModule } from '../membrane-layer-polymer-type/membrane-layer-polymer-type.module';
import { ProductionMethodModule } from '../production-method/production-method.module';
import { WaterproofFunctionModule } from '../waterproof-function/waterproof-function.module';
import { HomeostasisFunctionModule } from '../homeostasis-function/homeostasis-function.module';
import { EstimationModule } from '../estimation/estimation.module';
import { ImageModule } from '../image/image.module';
import { LayerModule } from '../layer/layer.module';
import { ReliabilityFunctionModule } from '../reliability-function/reliability-function.module';
import { ExelModule } from 'src/services/exel/exel.module';
import { ConditionModule } from '../condition/condition.module';
import { PaginationModule } from 'src/services/pagination/pagination.module';

@Module({
  imports: [
    GlueTypeModule,
    LayerTypeModule,
    MembraneLayerPolymerTypeModule,
    ProductionMethodModule,
    ConditionModule,
    WaterproofFunctionModule,
    HomeostasisFunctionModule,
    ReliabilityFunctionModule,
    EstimationModule,
    ImageModule,
    LayerModule,
    TypeOrmModule.forFeature([MaterialEntity]),
    ExelModule,
    PaginationModule,
  ],
  controllers: [MaterialController],
  providers: [MaterialService],
})
export class MaterialModule {}
