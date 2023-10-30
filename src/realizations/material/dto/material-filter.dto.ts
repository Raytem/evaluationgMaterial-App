import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { PaginationDto } from 'src/services/pagination/dto/pagination.dto';

export class MaterialFilterDto extends PaginationDto {
  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty({ type: String, required: false, minimum: 1 })
  @IsOptional()
  @Type(() => Number)
  @IsPositive()
  @IsInt()
  @IsNumber()
  userId: number;

  @ApiProperty({ type: Number, required: false })
  @Type(() => Number)
  @IsOptional()
  @IsInt()
  @IsNumber()
  layersCnt: number;

  @ApiProperty({ type: Number, required: false, minimum: 1 })
  @Type(() => Number)
  @IsOptional()
  @IsPositive()
  @IsInt()
  @IsNumber()
  membraneLayerPolymerType_id: number;

  @ApiProperty({ type: Number, required: false, minimum: 1 })
  @Type(() => Number)
  @IsOptional()
  @IsPositive()
  @IsInt()
  @IsNumber()
  productionMethod_id: number;

  @ApiProperty({ type: Number, required: false })
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  depth_min: number;

  @ApiProperty({ type: Number, required: false })
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  depth_max: number;

  //waterproof-function
  @ApiProperty({ type: Number, required: false })
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  materialBlottingPressure_calculated_min: number;

  @ApiProperty({ type: Number, required: false })
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  materialBlottingPressure_calculated_max: number;

  @ApiProperty({ type: Number, required: false })
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  materialBlottingTime_calculated_min: number;

  @ApiProperty({ type: Number, required: false })
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  materialBlottingTime_calculated_max: number;

  //homeostasis-function
  @ApiProperty({ type: Number, required: false })
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  waterPermeability_calculated_min: number;

  @ApiProperty({ type: Number, required: false })
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  waterPermeability_calculated_max: number;

  @ApiProperty({ type: Number, required: false })
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  totalThermalResistance_calculated_min: number;

  @ApiProperty({ type: Number, required: false })
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  totalThermalResistance_calculated_max: number;

  //reliability-function
  @ApiProperty({ type: Number, required: false })
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  relativeBlottingPressureAfterLoad_relativeValuation_min: number;

  @ApiProperty({ type: Number, required: false })
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  relativeBlottingPressureAfterLoad_relativeValuation_max: number;
}
