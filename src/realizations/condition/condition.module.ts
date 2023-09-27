import { Module } from '@nestjs/common';
import { ConditionService } from './condition.service';

@Module({
  providers: [ConditionService],
})
export class ConditionModule {}
