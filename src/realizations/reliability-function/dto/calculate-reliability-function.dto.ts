import { OmitType } from '@nestjs/swagger';
import { ReliabilityFunctionEntity } from '../entities/reliability-function.entity';

export class CalculateReliabilityFunctionDto extends OmitType(
  ReliabilityFunctionEntity,
  ['id', 'material', 'comment', 'avgWeightedEstimate'],
) {}
