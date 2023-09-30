import { Module } from '@nestjs/common';
import { ConditionService } from './condition.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConditionEntity } from './entities/condition.entity';
import { AbrasionTypeModule } from '../abrasion-type/abrasion-type.module';
import { BendingTypeModule } from '../bending-type/bending-type.module';
import { PhysicalActivityTypeModule } from '../physical-activity-type/physical-activity-type.module';
import { WashingTypeModule } from '../washing-type/washing-type.module';
import { WashingModule } from '../washing/washing.module';

@Module({
  imports: [
    AbrasionTypeModule,
    BendingTypeModule,
    PhysicalActivityTypeModule,
    WashingTypeModule,
    WashingModule,
    TypeOrmModule.forFeature([ConditionEntity]),
  ],
  providers: [ConditionService],
  exports: [ConditionService],
})
export class ConditionModule {}
