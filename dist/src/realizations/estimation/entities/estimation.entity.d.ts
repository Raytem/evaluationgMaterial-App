import { AbstractBaseEntity } from 'src/realizations/abstract-base-entity';
import { MaterialEntity } from 'src/realizations/material/entities/material.entity';
export declare class EstimationEntity extends AbstractBaseEntity {
    material: MaterialEntity;
    waterproofFunction_weight: number;
    homeostasisFunction_weight: number;
    reliabilityFunction_weight: number;
    avgWeightedArithmetic: number;
    avgWeightedGeometric: number;
}
