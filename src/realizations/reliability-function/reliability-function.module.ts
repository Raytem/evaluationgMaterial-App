import { Module } from '@nestjs/common';
import { ReliabilityFunctionService } from './reliability-function.service';

@Module({
  providers: [ReliabilityFunctionService],
})
export class ReliabilityFunctionModule {}
