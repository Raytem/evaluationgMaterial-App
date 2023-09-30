import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNumber,
  IsPositive,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateLayerDto } from 'src/realizations/layer/dto/create-layer.dto';

export class MaterialInfoDto {
  @ApiProperty({ type: String })
  @IsString()
  name: string;

  @ApiProperty({ type: String })
  @IsString()
  manufacturer: string;

  @ApiProperty({ type: String })
  @IsString()
  description: string;

  @ApiProperty({ type: Number })
  @IsNumber()
  depth: number;

  @ApiProperty({ type: Number, minimum: 1 })
  @IsNumber()
  @IsPositive()
  productionMethod_id: number;

  @ApiProperty({ type: Number, minimum: 1 })
  @IsNumber()
  @IsPositive()
  membraneLayerPolymerType_id: number;

  @ApiProperty({ type: Number, minimum: 1 })
  @IsNumber()
  @IsPositive()
  glueType_id: number;

  @ApiProperty({ type: () => CreateLayerDto, isArray: true })
  @ValidateNested({ each: true })
  @Type(() => CreateLayerDto)
  layers: CreateLayerDto[];
}
