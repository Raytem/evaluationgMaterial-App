import { PartialType } from '@nestjs/swagger';
import { CreateHomeostasisFunctionDto } from './create-homeostasis-function.dto';

export class UpdateHomeostasisFunctionDto extends PartialType(CreateHomeostasisFunctionDto) {}
