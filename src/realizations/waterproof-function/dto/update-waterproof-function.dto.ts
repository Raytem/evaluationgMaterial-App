import { PartialType } from '@nestjs/mapped-types';
import { CreateWaterproofFunctionDto } from './create-waterproof-function.dto';

export class UpdateWaterproofFunctionDto extends PartialType(CreateWaterproofFunctionDto) {}
