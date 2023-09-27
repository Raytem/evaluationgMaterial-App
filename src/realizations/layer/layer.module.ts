import { Module } from '@nestjs/common';
import { LayerService } from './layer.service';

@Module({
  providers: [LayerService],
})
export class LayerModule {}
