import { OmitType } from '@nestjs/swagger';
import { HomeostasisFunctionEntity } from '../entities/homeostasis-function.entity';

export class CalculateHomeostasisFunctionDto extends OmitType(
  HomeostasisFunctionEntity,
  [
    'id',
    'material',
    'waterPermeability_calculated',
    'waterPermeabilityDynamicCriteria_calculated',
    'totalThermalResistance_calculated',
    'waterPermeability_relativeValuation',
    'waterPermeabilityDynamicCriteria_relativeValuation',
    'totalThermalResistance_relativeValuation',
    'minPressureDiff',
    'maxPressureDiff',
    'estimatedPressureDiff',
    'avgRangePressureVal',
    'comment',
    'avgWeightedEstimate',
  ],
) {}
