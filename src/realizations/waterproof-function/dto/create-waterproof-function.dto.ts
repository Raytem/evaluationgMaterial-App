import { OmitType } from '@nestjs/swagger';
import { WaterproofFunctionEntity } from '../entities/waterproof-function.entity';

export class CreateWaterproofFunctionDto extends OmitType(
  WaterproofFunctionEntity,
  ['id'],
) {}
