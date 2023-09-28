import { AbstractBaseEntity } from 'src/realizations/abstract-base-entity';
import { MaterialEntity } from 'src/realizations/material/entities/material.entity';
export declare class ReliabilityFunctionEntity extends AbstractBaseEntity {
    material: MaterialEntity;
    comment: string;
    equipment: string;
    avgWeightedEstimate: number;
}
