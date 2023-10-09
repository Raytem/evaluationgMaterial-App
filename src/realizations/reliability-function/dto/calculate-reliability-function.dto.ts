import { OmitType } from '@nestjs/swagger';
import { ReliabilityFunctionEntity } from '../entities/reliability-function.entity';

export class CalculateReliabilityFunctionDto extends OmitType(
  ReliabilityFunctionEntity,
  [
    'id',
    'material',
    'relativeBlottingPressureAfterLoad_relativeValuation',
    'relativeWaterResistanceAfterLoad_relativeValuation',
    'relativeBlottingTimeAfterLoad_relativeValuation',
    'waterproofRealizationCriteriaAfterLoad_calculated',
    'waterproofRealizationCriteriaAfterLoad_base',
    'waterproofRealizationCriteriaAfterLoad_relativeValuation',
    'comment',
    'avgWeightedEstimate',
  ],
) {}
