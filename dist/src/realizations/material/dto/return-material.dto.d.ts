import { MaterialInfoDto } from './material-info.dto';
import { ConditionEntity } from 'src/realizations/condition/entities/condition.entity';
import { MaterialEntity } from '../entities/material.entity';
export declare class ReturnMaterialDto extends MaterialInfoDto {
    constructor(materialEntity: MaterialEntity);
    condition: ConditionEntity;
}
