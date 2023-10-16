import { AbrasionTypeEntity } from 'src/realizations/abrasion-type/entities/abrasion-type.entity';
import { AbstractBaseEntity } from 'src/realizations/abstract-base-entity';
import { BendingTypeEntity } from 'src/realizations/bending-type/entities/bending-type.entity';
import { MaterialEntity } from 'src/realizations/material/entities/material.entity';
import { PhysicalActivityTypeEntity } from 'src/realizations/physical-activity-type/entities/physical-activity-type.entity';
import { WashingEntity } from 'src/realizations/washing/entities/washing.entity';
export declare class ConditionEntity extends AbstractBaseEntity {
    isPositive: boolean;
    minAirTemp: number;
    maxAirTemp: number;
    minAirHumidity: number;
    maxAirHumidity: number;
    avgAirSpeed: number;
    residenceTime: number;
    torsionAngle: number;
    stretchingCompression: number;
    material: MaterialEntity;
    abrasionType: AbrasionTypeEntity;
    washing: WashingEntity;
    bendingType: BendingTypeEntity;
    physicalActivityType: PhysicalActivityTypeEntity;
}
