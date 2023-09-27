import { PartialType } from '@nestjs/mapped-types';
import { CreateHomeostasisFunctionDto } from './create-homeostasis-function.dto';

export class UpdateHomeostasisFunctionDto extends PartialType(CreateHomeostasisFunctionDto) {}
