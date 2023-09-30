import { Module } from '@nestjs/common';
import { LayerTypeService } from './layer-type.service';
import { LayerTypeController } from './layer-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaginationModule } from 'src/services/pagination/pagination.module';
import { LayerTypeEntity } from './entities/layer-type.entity';
import { PaginationService } from 'src/services/pagination/pagination.service';

@Module({
  imports: [PaginationModule, TypeOrmModule.forFeature([LayerTypeEntity])],
  controllers: [LayerTypeController],
  providers: [LayerTypeService, PaginationService],
  exports: [LayerTypeService],
})
export class LayerTypeModule {}
