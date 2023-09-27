import { PartialType } from '@nestjs/mapped-types';
import { CreateReliabilityFunctionDto } from './create-reliability-function.dto';

export class UpdateReliabilityFunctionDto extends PartialType(CreateReliabilityFunctionDto) {}
