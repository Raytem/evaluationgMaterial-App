import { PickType } from '@nestjs/swagger';
import { EstimationEntity } from '../entities/estimation.entity';

export class CalculateEstimationDto extends PickType(EstimationEntity, [
  'waterproofFunction_weight',
  'homeostasisFunction_weight',
  'reliabilityFunction_weight',
]) {}
