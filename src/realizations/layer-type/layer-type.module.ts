import { Module } from '@nestjs/common';
import { LayerTypeService } from './layer-type.service';
import { LayerTypeController } from './layer-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaginationModule } from 'src/pagination/pagination.module';
import { LayerTypeEntity } from './entities/layer-type.entity';
import { PaginationService } from 'src/pagination/pagination.service';

@Module({
  imports: [PaginationModule, TypeOrmModule.forFeature([LayerTypeEntity])],
  controllers: [LayerTypeController],
  providers: [LayerTypeService, PaginationService],
})
export class LayerTypeModule {}
