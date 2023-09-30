import { ApiProperty } from '@nestjs/swagger';
import { IsString, ValidateNested } from 'class-validator';
import { CreateConditionDto } from 'src/realizations/condition/dto/create-condition.dto';
import { CreateHomeostasisFunctionDto } from 'src/realizations/homeostasis-function/dto/create-homeostasis-function.dto';
import { CalculateWaterproofFunctionDto } from 'src/realizations/waterproof-function/dto/calculate-waterproof-function.dto';
import { CalculateReliabilityFunctionDto } from 'src/realizations/reliability-function/dto/calculate-reliability-function.dto';
import { Type } from 'class-transformer';
import { Multer } from 'multer';
import { CalculateHomeostasisFunctionDto } from 'src/realizations/homeostasis-function/dto/calculate-homeostasis-function.dto';
import { MaterialInfoDto } from './material-info.dto';

export class CreateMaterialDto {
  @ApiProperty({
    type: String,
    format: 'binary',
    isArray: true,
    required: false,
    maxItems: 5,
    description: `Max count of files: 5,
    File type: image/*,
    Max file size: 5000000 bytes`,
  })
  @IsString()
  images: string;

  @ApiProperty({ type: () => MaterialInfoDto })
  @ValidateNested()
  @Type(() => MaterialInfoDto)
  material: MaterialInfoDto;

  @ApiProperty({ type: () => CreateConditionDto })
  @ValidateNested()
  @Type(() => CreateConditionDto)
  condition: CreateConditionDto;

  @ApiProperty({ type: () => CalculateWaterproofFunctionDto })
  @ValidateNested()
  @Type(() => CalculateWaterproofFunctionDto)
  waterproofFunction: CalculateWaterproofFunctionDto;

  @ApiProperty({ type: () => CreateHomeostasisFunctionDto })
  @ValidateNested()
  @Type(() => CalculateHomeostasisFunctionDto)
  homeostasisFunction: CalculateHomeostasisFunctionDto;

  @ApiProperty({ type: () => CalculateReliabilityFunctionDto })
  @ValidateNested()
  @Type(() => CalculateReliabilityFunctionDto)
  reliabilityFunction: CalculateReliabilityFunctionDto;
}
