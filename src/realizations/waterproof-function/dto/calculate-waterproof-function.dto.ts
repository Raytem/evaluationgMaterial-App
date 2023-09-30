import { OmitType } from '@nestjs/swagger';
import { WaterproofFunctionEntity } from '../entities/waterproof-function.entity';

export class CalculateWaterproofFunctionDto extends OmitType(
  WaterproofFunctionEntity,
  [
    'id',
    'waterproofRealizationCriteria_calculated',
    'dynamicWaterproofCriteria_calculated',
    'materialBlottingPressure_base',
    'waterproof_base',
    'materialBlottingTime_base',
    'waterproofRealizationCriteria_base',
    'dynamicWaterproofCriteria_base',
    'comment',
    'avgWeightedEstimate',
  ],
) {}
