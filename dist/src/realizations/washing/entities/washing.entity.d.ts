import { AbstractBaseEntity } from 'src/realizations/abstract-base-entity';
import { ConditionEntity } from 'src/realizations/condition/entities/condition.entity';
import { WashingTypeEntity } from 'src/realizations/washing-type/entities/washing-type.entity';
export declare class WashingEntity extends AbstractBaseEntity {
    temperature: number;
    cyclesCnt: number;
    duration: number;
    press: boolean;
    condition: ConditionEntity;
    washingType: WashingTypeEntity;
}
