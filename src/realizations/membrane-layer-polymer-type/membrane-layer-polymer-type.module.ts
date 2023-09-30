import { Module } from '@nestjs/common';
import { MembraneLayerPolymerTypeService } from './membrane-layer-polymer-type.service';
import { MembraneLayerPolymerTypeController } from './membrane-layer-polymer-type.controller';
import { MembraneLayerPolymerTypeEntity } from './entities/membrane-layer-polymer-type.entity';
import { PaginationModule } from 'src/services/pagination/pagination.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaginationService } from 'src/services/pagination/pagination.service';

@Module({
  imports: [
    PaginationModule,
    TypeOrmModule.forFeature([MembraneLayerPolymerTypeEntity]),
  ],
  controllers: [MembraneLayerPolymerTypeController],
  providers: [MembraneLayerPolymerTypeService, PaginationService],
  exports: [MembraneLayerPolymerTypeService],
})
export class MembraneLayerPolymerTypeModule {}
