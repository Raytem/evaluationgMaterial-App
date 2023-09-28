import { AbstractBaseEntity } from 'src/realizations/abstract-base-entity';
import { ConditionEntity } from 'src/realizations/condition/entities/condition.entity';
export declare class PhysicalActivityTypeEntity extends AbstractBaseEntity {
    name: string;
    description: string;
    conditions: ConditionEntity[];
}
