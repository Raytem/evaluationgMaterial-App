import { Module } from '@nestjs/common';
import { ReliabilityFunctionService } from './reliability-function.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReliabilityFunctionEntity } from './entities/reliability-function.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReliabilityFunctionEntity])],
  providers: [ReliabilityFunctionService],
  exports: [ReliabilityFunctionService],
})
export class ReliabilityFunctionModule {}
