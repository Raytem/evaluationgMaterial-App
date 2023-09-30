import { OmitType } from '@nestjs/swagger';
import { ReliabilityFunctionEntity } from '../entities/reliability-function.entity';

export class CreateReliabilityFunctionDto extends OmitType(
  ReliabilityFunctionEntity,
  ['id'],
) {}
