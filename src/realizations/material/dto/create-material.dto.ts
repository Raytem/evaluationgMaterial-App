import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { CreateConditionDto } from 'src/realizations/condition/dto/create-condition.dto';
import { CalculateWaterproofFunctionDto } from 'src/realizations/waterproof-function/dto/calculate-waterproof-function.dto';
import { CalculateReliabilityFunctionDto } from 'src/realizations/reliability-function/dto/calculate-reliability-function.dto';
import { Type } from 'class-transformer';
import { CalculateHomeostasisFunctionDto } from 'src/realizations/homeostasis-function/dto/calculate-homeostasis-function.dto';
import { MaterialInfoDto } from './material-info.dto';
import { CalculateEstimationDto } from 'src/realizations/estimation/dto/calculate-estimation.dto';

export class CreateMaterialDto {
  @ApiProperty({
    type: String,
    format: 'binary',
    isArray: true,
    required: false,
    maxItems: 5,
    description: `Max count of files: 5,
    File type: image/*,
    Max file size: 5 mb`,
  })
  @IsString()
  images: string;

  @ApiProperty({ type: () => MaterialInfoDto })
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => MaterialInfoDto)
  material: MaterialInfoDto;

  @ApiProperty({ type: () => CreateConditionDto })
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CreateConditionDto)
  condition: CreateConditionDto;

  @ApiProperty({ type: () => CalculateWaterproofFunctionDto })
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CalculateWaterproofFunctionDto)
  waterproofFunction: CalculateWaterproofFunctionDto;

  @ApiProperty({ type: () => CalculateHomeostasisFunctionDto })
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CalculateHomeostasisFunctionDto)
  homeostasisFunction: CalculateHomeostasisFunctionDto;

  @ApiProperty({ type: () => CalculateReliabilityFunctionDto })
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CalculateReliabilityFunctionDto)
  reliabilityFunction: CalculateReliabilityFunctionDto;

  @ApiProperty({ type: () => CalculateEstimationDto })
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CalculateEstimationDto)
  estimation: CalculateEstimationDto;
}
