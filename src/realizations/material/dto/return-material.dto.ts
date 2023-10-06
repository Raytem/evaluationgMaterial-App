import { ApiProperty } from '@nestjs/swagger';
import { MaterialInfoDto } from './material-info.dto';
import { ConditionEntity } from 'src/realizations/condition/entities/condition.entity';
import { MaterialEntity } from '../entities/material.entity';

export class ReturnMaterialDto extends MaterialInfoDto {
  constructor(materialEntity: MaterialEntity) {
    super();
    Object.assign(this, materialEntity);
  }

  @ApiProperty({ type: () => ConditionEntity })
  condition: ConditionEntity;
}
