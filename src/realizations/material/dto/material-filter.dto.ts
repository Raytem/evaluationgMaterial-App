import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';
import { PaginationDto } from 'src/services/pagination/dto/pagination.dto';

export class MaterialFilterDto extends PaginationDto {
  @ApiProperty({ type: String, required: false })
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty({ type: Number, required: false })
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  layersCnt: number;

  @ApiProperty({ type: Number, required: false })
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  depth: number;

  //waterproof-function
  @ApiProperty({ type: Number, required: false })
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  materialBlottingPressure_calculated: number;

  //homeostasis-function
  @ApiProperty({ type: Number, required: false })
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  waterPermeability_calculated: number;

  //homeostasis-function
  @ApiProperty({ type: Number, required: false })
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  totalThermalResistance_calculated: number;

  //reliability-function
  @ApiProperty({ type: Number, required: false })
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  materialBlottingPressure_relativeValuation: number;

  @ApiProperty({ type: Number, required: false, minimum: 1 })
  @Type(() => Number)
  @IsOptional()
  @IsPositive()
  @IsNumber()
  membraneLayerPolymerType_id: number;

  @ApiProperty({ type: Number, required: false, minimum: 1 })
  @Type(() => Number)
  @IsOptional()
  @IsPositive()
  @IsNumber()
  productionMethod_id: number;
}
