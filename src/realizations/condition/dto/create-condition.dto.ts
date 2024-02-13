import { ApiProperty, OmitType } from '@nestjs/swagger';
import { IsInt, IsNumber, IsOptional, IsPositive, ValidateNested } from 'class-validator';
import { ConditionEntity } from '../entities/condition.entity';
import { CreateWashingDto } from 'src/realizations/washing/dto/create-washing.dto';
import { Type } from 'class-transformer';

export class CreateConditionDto extends OmitType(ConditionEntity, [
  'id',
  'material',
  'washing',
  'bendingType',
  'abrasionType',
  'physicalActivityType',
]) {
  @ApiProperty({ type: () => CreateWashingDto, required: false })
  @IsOptional()
  @ValidateNested()
  @Type(() => CreateWashingDto)
  washing: CreateWashingDto;

  @ApiProperty({ type: Number, minimum: 1, required: false })
  @IsOptional()
  @IsPositive()
  @IsInt()
  @IsNumber()
  bendingType_id: number;

  @ApiProperty({ type: Number, minimum: 1, required: false })
  @IsOptional()
  @IsPositive()
  @IsInt()
  @IsNumber()
  abrasionType_id: number;

  @ApiProperty({ type: Number, minimum: 1 })
  @IsPositive()
  @IsInt()
  @IsNumber()
  physicalActivityType_id: number;
}
