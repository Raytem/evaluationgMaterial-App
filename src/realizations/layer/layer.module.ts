import { Module } from '@nestjs/common';
import { LayerService } from './layer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LayerEntity } from './entities/layer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LayerEntity])],
  providers: [LayerService],
})
export class LayerModule {}
