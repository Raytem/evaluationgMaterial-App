import { ApiProperty, OmitType } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsPositive, ValidateNested } from 'class-validator';
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
  @ApiProperty({ type: () => CreateWashingDto })
  @ValidateNested()
  @Type(() => CreateWashingDto)
  washing: CreateWashingDto;

  @ApiProperty({ type: Number, minimum: 1 })
  @IsNumber()
  @IsPositive()
  bendingType_id: number;

  @ApiProperty({ type: Number, minimum: 1 })
  @IsNumber()
  @IsPositive()
  abrasionType_id: number;

  @ApiProperty({ type: Number, minimum: 1 })
  @IsNumber()
  @IsPositive()
  physicalActivityType_id: number;
}
