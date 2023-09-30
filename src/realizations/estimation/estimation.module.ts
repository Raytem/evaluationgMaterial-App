import { Module } from '@nestjs/common';
import { EstimationService } from './estimation.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstimationEntity } from './entities/estimation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EstimationEntity])],
  providers: [EstimationService],
  exports: [EstimationService],
})
export class EstimationModule {}
