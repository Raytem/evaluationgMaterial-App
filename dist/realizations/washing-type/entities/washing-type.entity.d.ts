import { AbstractBaseEntity } from 'src/realizations/abstract-base-entity';
import { WashingEntity } from 'src/realizations/washing/entities/washing.entity';
export declare class WashingTypeEntity extends AbstractBaseEntity {
    name: string;
    washings: WashingEntity[];
}
