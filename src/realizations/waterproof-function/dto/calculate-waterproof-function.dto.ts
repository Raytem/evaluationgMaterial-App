import { OmitType } from '@nestjs/swagger';
import { WaterproofFunctionEntity } from '../entities/waterproof-function.entity';

export class CalculateWaterproofFunctionDto extends OmitType(
  WaterproofFunctionEntity,
  [
    'id',
    'waterproofRealizationCriteria_calculated',
    'dynamicWaterproofCriteria_calculated',
    'materialBlottingPressure_relativeValuation',
    'waterproof_relativeValuation',
    'materialBlottingTime_relativeValuation',
    'waterproofRealizationCriteria_relativeValuation',
    'dynamicWaterproofCriteria_relativeValuation',
    'comment',
    'avgWeightedEstimate',
  ],
) {}
