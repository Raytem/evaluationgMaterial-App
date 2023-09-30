import { OmitType } from '@nestjs/swagger';
import { HomeostasisFunctionEntity } from '../entities/homeostasis-function.entity';

export class CreateHomeostasisFunctionDto extends OmitType(
  HomeostasisFunctionEntity,
  ['id'],
) {}
