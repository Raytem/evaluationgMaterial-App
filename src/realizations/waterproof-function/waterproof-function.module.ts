import { Module } from '@nestjs/common';
import { WaterproofFunctionService } from './waterproof-function.service';

@Module({
  providers: [WaterproofFunctionService],
})
export class WaterproofFunctionModule {}
