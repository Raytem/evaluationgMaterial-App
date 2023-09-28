import { Module } from '@nestjs/common';
import { LayerService } from './layer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LayerEntity } from './entities/layer.entity';
import { LayerTypeModule } from '../layer-type/layer-type.module';

@Module({
  imports: [LayerTypeModule, TypeOrmModule.forFeature([LayerEntity])],
  providers: [LayerService],
})
export class LayerModule {}
