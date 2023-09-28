import { AbstractBaseEntity } from 'src/realizations/abstract-base-entity';
import { MaterialEntity } from 'src/realizations/material/entities/material.entity';
export declare class ProductionMethodEntity extends AbstractBaseEntity {
    name: string;
    material: MaterialEntity;
}
