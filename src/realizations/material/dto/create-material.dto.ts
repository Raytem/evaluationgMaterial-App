import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsString } from 'class-validator';
import { CreateConditionDto } from 'src/realizations/condition/dto/create-condition.dto';
import { CreateLayerDto } from 'src/realizations/layer/dto/create-layer.dto';

class MaterialDto {
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
}

export class CreateMaterialDto {
  material: MaterialDto;

  layers: CreateLayerDto[];

  condition: CreateConditionDto;

  @ApiProperty({ type: Number })
  @IsNumber()
  @IsPositive()
  productionMethod_id: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @IsPositive()
  membraneLayerPolymer_id: number;

  @ApiProperty({ type: Number })
  @IsNumber()
  @IsPositive()
  glueType_id: number;
}
