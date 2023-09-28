import { PartialType } from '@nestjs/swagger';
import { CreateWaterproofFunctionDto } from './create-waterproof-function.dto';

export class UpdateWaterproofFunctionDto extends PartialType(
  CreateWaterproofFunctionDto,
) {}
