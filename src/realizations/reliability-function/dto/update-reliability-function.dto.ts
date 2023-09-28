import { PartialType } from '@nestjs/swagger';
import { CreateReliabilityFunctionDto } from './create-reliability-function.dto';

export class UpdateReliabilityFunctionDto extends PartialType(
  CreateReliabilityFunctionDto,
) {}
