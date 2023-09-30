import { Module } from '@nestjs/common';
import { WaterproofFunctionService } from './waterproof-function.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WaterproofFunctionEntity } from './entities/waterproof-function.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WaterproofFunctionEntity])],
  providers: [WaterproofFunctionService],
  exports: [WaterproofFunctionService],
})
export class WaterproofFunctionModule {}
